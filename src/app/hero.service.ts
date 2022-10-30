import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Enregistrer un message HeroService avec MessageService */
  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  /**Définition de heroesUrl de la forme :base/:collectionName 
   * avec l’adresse de la ressource heroes sur le serveur. 
   * Ici, base est la ressource à laquelle les demandes sont faites, 
   * et collectionName est l’objet de données heroes dans le fichier in-memory-data-service.ts. */
  private heroesUrl = 'api/heroes';  // URL vers l’API Web

  /**L’opérateur catchError() intercepte un Observable qui a échoué. 
   * L’opérateur transmet ensuite l’erreur à la fonction de gestion des erreurs. */
  /** Obtenir des héros à partir du serveur */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('Héros récupérés')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /**
   * Gérer l’opération Http qui a échoué.
   * Laissez l’application continuer.
   *
   * @param operation - Nom de l’opération qui a échoué
   * @param result - Valeur facultative à renvoyer comme le résultat de l'observable
   * La méthode handleError() suivante signale l’erreur, 
   * puis retourne un résultat inoffensif afin que l’application continue de fonctionner.
   * Au lieu de gérer l’erreur directement, 
   * il retourne une fonction de gestionnaire d’erreurs à catchError. 
   * Cette fonction est configurée avec le nom de l’opération qui a échoué et une valeur de retour sûre.
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Héro récupéré id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Héro mis à jour id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Héro ajouté w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Héro supprimé id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`Héros correspondants à "${term}"`) :
        this.log(`Aucun héro ne correspond à "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

}

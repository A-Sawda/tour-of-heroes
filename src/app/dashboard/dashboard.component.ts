import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import * as Highcharts from 'highcharts';
import { SexTypeUi, SexType } from '../constants/sexTypeUi';
import { JobTypeUi, JobType } from '../constants/jobTypeUi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  public highcharts = Highcharts;
  public chartStatusOptions: Highcharts.Options = {};
  public chartStatusOptionsC: Highcharts.Options = {};
  public chartStatusOptionsNC: Highcharts.Options = {};
  public chartJobOptions: Highcharts.Options = {};

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        //this.heroes = heroes.slice(1, 5);
        this.heroes = heroes;


        this.chartStatusOptions = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
          },
          title: {
            text: 'Répartition des statuts'
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
            }
          },
          series: [{
            type: 'pie',
            name: 'Nombre d\'employés',
            data: [
              [this.statusDistributuion('Non cadre').label, this.statusDistributuion('Non cadre').nbKeyword],
              [this.statusDistributuion('Cadre').label, this.statusDistributuion('Cadre').nbKeyword]
            ]
          }]
        };



        this.chartStatusOptionsC = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
          },
          title: {
            text: 'Répartition des sexes parmi les cadres'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
            }
          },
          series: [{
            type: 'pie',
            name: 'Part de sexe',
            data: [
              ['Femme', this.statusDistributuion('Cadre').f],
              ['Homme', this.statusDistributuion('Cadre').h]
            ]
          }]
        };



        this.chartStatusOptionsNC = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
          },
          title: {
            text: 'Répartition des sexes parmi les non cadres'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
            }
          },
          series: [{
            type: 'pie',
            name: 'Part de sexe',
            data: [
              ['Femme', this.statusDistributuion('Non cadre').f],
              ['Homme', this.statusDistributuion('Non cadre').h]
            ]
          }]
        };



        this.chartJobOptions = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
          },
          title: {
            text: 'Répartition des emplois'
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
            }
          },
          series: [{
            type: 'pie',
            name: 'Nombre d\'employés',
            data: [
              {
                name: JobTypeUi[JobType.DG].label,
                y: this.jobDistributuion(JobType.DG).nbKeyword,
                sliced: true,
                selected: true
              },
              [JobTypeUi[JobType.COMPTABLE].label, this.jobDistributuion(JobType.COMPTABLE).nbKeyword],
              [JobTypeUi[JobType.COACH].label, this.jobDistributuion(JobType.COACH).nbKeyword],
              [JobTypeUi[JobType.COMMUNICATION].label, this.jobDistributuion(JobType.COMMUNICATION).nbKeyword],
              [JobTypeUi[JobType.HOTESSE].label, this.jobDistributuion(JobType.HOTESSE).nbKeyword],
              [JobTypeUi[JobType.MENAGE].label, this.jobDistributuion(JobType.MENAGE).nbKeyword],
              [JobTypeUi[JobType.GARDIEN].label, this.jobDistributuion(JobType.GARDIEN).nbKeyword],
              [JobTypeUi[JobType.ASSISTANTDEDIRECTION].label, this.jobDistributuion(JobType.ASSISTANTDEDIRECTION).nbKeyword],
            ]
          }]
        };



        Highcharts.chart('containerStatus', this.chartStatusOptions);
        Highcharts.chart('containerStatusC', this.chartStatusOptionsC);
        Highcharts.chart('containerStatusNC', this.chartStatusOptionsNC);
        Highcharts.chart('containerJob', this.chartJobOptions);
        //this.heroes=this.heroes.filter(h => h.status === "Cadre");
      });
  }

  private statusDistributuion(keyword: string) {
    const retValue: { nbKeyword: number, percentage: number, label: string, f: number, h: number } = { nbKeyword: 0, percentage: 0, label: '', f: 0, h: 0 };
    let nbTotal = 0;
    for (const hero of this.heroes) {
      if (hero.status) {
        nbTotal++;
        if (hero.status === keyword) {
          retValue.nbKeyword++;
          if (hero.sex === SexType.FEMININ) {
            retValue.f++;
          } else {
            retValue.h++;
          }
        }
      }
    }
    retValue.percentage = (retValue.nbKeyword * 100) / nbTotal;
    retValue.f = (retValue.f * 100) / retValue.nbKeyword;
    retValue.h = (retValue.h * 100) / retValue.nbKeyword;
    retValue.label = keyword;
    return retValue;
  }

  private jobDistributuion(keyword: string) {
    const retValue: { nbKeyword: number, percentage: number, f: number, h: number } = { nbKeyword: 0, percentage: 0, f: 0, h: 0 };
    let nbTotal = 0;
    for (const hero of this.heroes) {
      if (hero.job) {
        nbTotal++;
        if (hero.job === keyword) {
          retValue.nbKeyword++;
          if (hero.sex === SexType.FEMININ) {
            retValue.f++;
          } else {
            retValue.h++;
          }
        }
      }
    }
    retValue.percentage = (retValue.nbKeyword * 100) / nbTotal;
    retValue.f = (retValue.f * 100) / retValue.nbKeyword;
    retValue.h = (retValue.h * 100) / retValue.nbKeyword;
    return retValue;
  }

}

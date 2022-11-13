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

  constructor(private heroService: HeroService) {
    console.log('heroes', this.heroes) }

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
            /*type: 'area',
            height: 700*/
          },
          title: {
            text: 'Répartition des statuts'
          },
          credits: {
            enabled: false
          },
          /*tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
          },*/
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
              /*dataLabels:{
                enabled:true,
                color:'#000',
                connectorColor:'#000',
                format:'<b>{point.name}<b/>:{point.percentage:1f} %'
              }*/
            }
          },
          series: [{
            type: 'pie',
            name: 'Nombre d\'employés',
            /*colorByPoint: true,*/
            data: [
              [this.statusDistributuion('Non cadre').label, this.statusDistributuion('Non cadre').nbKeyword],
              {
                name: this.statusDistributuion('Cadre').label,
                y: this.statusDistributuion('Cadre').nbKeyword,
                sliced: true,
                selected: true
              }
            ]
          }]
        };


        
        this.chartStatusOptionsC = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
            /*type: 'area',
            height: 700*/
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
              /*dataLabels:{
                enabled:true,
                color:'#000',
                connectorColor:'#000',
                format:'<b>{point.name}<b/>:{point.percentage:1f} %'
              }*/
            }
          },
          series: [{
            type: 'pie',
            name: 'Part de sexe',
            /*colorByPoint: true,*/
            data: [
              ['Femme', this.statusDistributuion('Cadre').f],
              ['Homme',this.statusDistributuion('Cadre').h]
            ]
          }]
        };


        
        this.chartStatusOptionsNC = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
            /*type: 'area',
            height: 700*/
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
              /*dataLabels:{
                enabled:true,
                color:'#000',
                connectorColor:'#000',
                format:'<b>{point.name}<b/>:{point.percentage:1f} %'
              }*/
            }
          },
          series: [{
            type: 'pie',
            name: 'Part de sexe',
            /*colorByPoint: true,*/
            data: [
              ['Femme', this.statusDistributuion('Non cadre').f],
              ['Homme',this.statusDistributuion('Non cadre').h]
            ]
          }]
        };


        
        this.chartJobOptions = {
          chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
            /*type: 'area',
            height: 700*/
          },
          title: {
            text: 'Répartition des emplois'
          },
          credits: {
            enabled: false
          },
          /*tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
          },*/
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true,
              /*dataLabels:{
                enabled:true,
                color:'#000',
                connectorColor:'#000',
                format:'<b>{point.name}<b/>:{point.percentage:1f} %'
              }*/
            }
          },
          series: [{
            type: 'pie',
            name: 'Nombre d\'employés',
            /*colorByPoint: true,*/
            data: [
              [JobTypeUi[JobType.COMPTABLE].label, this.jobDistributuion(JobTypeUi[JobType.COMPTABLE].label).nbKeyword],
              [JobTypeUi[JobType.COACH].label, this.jobDistributuion(JobTypeUi[JobType.COACH].label).nbKeyword],
              [JobTypeUi[JobType.COMMUNICATION].label, this.jobDistributuion(JobTypeUi[JobType.COMMUNICATION].label).nbKeyword],
              [JobTypeUi[JobType.HOTESSE].label, this.jobDistributuion(JobTypeUi[JobType.HOTESSE].label).nbKeyword],
              [JobTypeUi[JobType.MENAGE].label, this.jobDistributuion(JobTypeUi[JobType.MENAGE].label).nbKeyword],
              [JobTypeUi[JobType.DG].label, this.jobDistributuion(JobTypeUi[JobType.DG].label).nbKeyword],
              [JobTypeUi[JobType.GARDIEN].label, this.jobDistributuion(JobTypeUi[JobType.GARDIEN].label).nbKeyword],
              [JobTypeUi[JobType.ASSISTANTDEDIRECTION].label, this.jobDistributuion(JobTypeUi[JobType.ASSISTANTDEDIRECTION].label).nbKeyword],
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
    const retValue: { nbKeyword: number, percentage: number, label: string, f:number, h:number } = { nbKeyword: 0, percentage: 0, label: '', f:0, h:0 };
    let nbTotal = 0;
    for (const hero of this.heroes) {
      if (hero.status) {
        nbTotal++;
          if (hero.status === keyword) {
            retValue.nbKeyword++;
            if(hero.sex===SexTypeUi[SexType.FEMININ].label){
              retValue.f++;
            }else{
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
    const retValue: { nbKeyword: number, percentage: number, f:number, h:number } = { nbKeyword: 0, percentage: 0, f:0, h:0 };
    let nbTotal = 0;
    for (const hero of this.heroes) {
      if (hero.job) {
        nbTotal++;
          if (hero.job === keyword) {
            retValue.nbKeyword++;
            if(hero.sex===SexTypeUi[SexType.FEMININ].label){
              retValue.f++;
            }else{
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

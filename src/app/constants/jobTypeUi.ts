

export interface JobTypeUi {
    label: string;
    status:string
  }
  
  export enum JobType{
      HOTESSE='HOTESSE',
      COMMUNICATION='COMMUNICATION',
    COACH='COACH',
  MENAGE='MENAGE'}
  
  
  export const JobTypeUi: {[name: string]: JobTypeUi} = {};
  
  JobTypeUi[JobType.HOTESSE]= {
    label: "Hotesse",
    status:"Non cadre"
  };
  JobTypeUi[JobType.COMMUNICATION]= {
    label: "Communication",
    status:"Cadre"
  };
  JobTypeUi[JobType.COACH]= {
    label: "Coach",
    status:"Cadre"
  };
  JobTypeUi[JobType.MENAGE]= {
    label: "Femme de ménage",
    status:"Non cadre"
  };
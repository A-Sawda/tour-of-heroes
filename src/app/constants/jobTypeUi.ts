

export interface JobTypeUi {
    label: string;
  }
  
  export enum JobType{
      HOTESSE='HOTESSE',
      COMMUNICATION='COMMUNICATION',
    COACH='COACH',
  MENAGE='MENAGE'}
  
  
  export const JobTypeUi: {[name: string]: JobTypeUi} = {};
  
  JobTypeUi[JobType.HOTESSE]= {
    label: "Hotesse",
  };
  JobTypeUi[JobType.COMMUNICATION]= {
    label: "Communication",
  };
  JobTypeUi[JobType.COACH]= {
    label: "Coach",
  };
  JobTypeUi[JobType.MENAGE]= {
    label: "Femme de ménage",
  };
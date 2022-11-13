

export interface JobTypeUi {
    label: string;
    status:string
  }
  
  export enum JobType{
      HOTESSE='HOTESSE',
      COMPTABLE='COMPTABLE',
      COMMUNICATION='COMMUNICATION',
    COACH='COACH',
  MENAGE='MENAGE',
  DG='DG',
  GARDIEN='GARDIEN',
  ASSISTANTDEDIRECTION='ASSISTANTDEDIRECTION'}
  
  
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
  JobTypeUi[JobType.COMPTABLE]= {
    label: "Comptable",
    status:"Cadre"
  };
  JobTypeUi[JobType.DG]= {
    label: "Directrice Générale",
    status:"Cadre"
  };
  JobTypeUi[JobType.GARDIEN]= {
    label: "Gardien",
    status:"Non cadre"
  };
  JobTypeUi[JobType.ASSISTANTDEDIRECTION]= {
    label: "Assistant de direction",
    status:"Non cadre"
  };
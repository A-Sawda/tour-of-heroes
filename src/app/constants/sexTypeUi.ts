

export interface SexTypeUi {
  label: string;
}

export enum SexType {
  MASCULIN = 'MASCULIN',
  FEMININ = 'FEMININ'
}


export const SexTypeUi: { [name: string]: SexTypeUi } = {};

SexTypeUi[SexType.MASCULIN] = {
  label: "Masculin",
};
SexTypeUi[SexType.FEMININ] = {
  label: "Feminin",
};
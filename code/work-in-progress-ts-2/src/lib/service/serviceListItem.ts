import { Round, Study } from '../../types';

export class ServiceListItem {
  private study: Study;
  private round: Round;
  private serviceName: string;
  private receiptDate: string;
  private deadlineDate: string;
  private compounds: number;
  private delivered: number;

  constructor(
    study: Study,
    round: Round,
    serviceName: string,
    receiptDate: string,
    deadlineDate: string,
    compounds: number,
    delivered: number
  ) {
    this.study = study;
    this.round = round;
    this.serviceName = serviceName;
    this.receiptDate = receiptDate;
    this.deadlineDate = deadlineDate;
    this.compounds = compounds;
    this.delivered = delivered;
  }
}

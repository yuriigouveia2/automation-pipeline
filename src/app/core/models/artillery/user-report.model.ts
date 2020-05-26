import { ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ResponseTime } from './response-time.model';
import { Code } from './code.model';

export class UserReport {
    public executedAt: Date;
    public UTC: string;
    public elapsedTimeHMS: string;

    public scenariosLaunched: number;
    public scenariosCompleted: number;
    public requestsCompleted: number;
    public meanResponseInSec: number;
    public reponseTimeInMsObj: ResponseTime;
    public codes: Code;

    constructor(userReport?: string) {
        if (userReport) {
            this.executedAt     = this.getExecutedTime(userReport);
            this.UTC            = this.getUTC(userReport);
            this.elapsedTimeHMS = this.getElapsedTime(userReport);
        }
    }

    private getExecutedTime(userReport: string): Date {
        let firstLine = userReport.split('\n')[0];
        const [hour, day] = firstLine.split('@')[1].split('(-300)');
        return new Date(`${hour} ${day}`);
    }

    private getElapsedTime(userReport: string): string {
        throw new Error("Method not implemented.");
    }
    
    private getUTC(userReport: string): string {
        throw new Error("Method not implemented.");
    }
    
}

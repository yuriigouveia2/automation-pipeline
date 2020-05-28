import { ResponseTime } from './response-time.model';
import { Code } from './code.model';

// See artillery-output-example.txt to fully understand.

export class UserReport {
    public executedAt: Date;
    public UTC: number;
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

    private getUTC(userReport: string): number {
        const firstLine = userReport.split('\n')[0];
        const utcValue = parseInt(firstLine.split('(').pop().split(')')[0]);
        return utcValue.toString().length > 3 ? utcValue/100 : utcValue;
    }

    private getElapsedTime(userReport: string): string {
        const secondLine = userReport.split('\n')[1];
        return secondLine.split('Elapsed time:')[1];
    }
    
    
}

export class ArtilleryReport {
    public createdAt: Date;
    public userReport: any[];
    public summaryReport: any;

    constructor(artilleryReport?: any) {
        if (artilleryReport) {
            this.createdAt     = new Date();
            this.userReport    = artilleryReport.userReport;
            this.summaryReport = artilleryReport.summaryReport;
        }
    }
}

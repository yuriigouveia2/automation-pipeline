export class Process {
    public pid             ?: number;
    public protocol        ?: string;
    public localAddress    ?: string;
    public externalAddress ?: string;
    public state           ?: string;

    constructor(process) {
        if (process) {
            this.pid             = process.pid;
            this.protocol        = process.protocol;
            this.localAddress    = process.localAddress;
            this.externalAddress = process.externalAddress;
            this.state           = process.state;
        }
    }
}

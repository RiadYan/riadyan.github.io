export interface HistoryEntry {
    cmd: string;
    output: string | string[];
    type?: 'whoami' | 'neofetch' | string;
}
export interface TechOrTool {
    id: string;
    name: string;
    description: string;
    icon?: string;
    percentage: number;
    link?: string;
}

export interface GalaxyData {
    id: string;
    name: string;
    items: TechOrTool[];
}
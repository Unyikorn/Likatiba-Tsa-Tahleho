// src/types.ts

export interface MourningSymbol {
  id: string;          // A unique identifier (e.g., "hat-01")
    name: string;        // The name (e.g., "Thapo")
      description: string; // Brief history or meaning
        category: 'hat' | 'cloth' | 'ritual'; // This is a "Union Type" (must be one of these three)
          mourningPeriod: string; // How long it is typically worn
            imageUrl?: string;   // The "?" means this field is optional
            }
            
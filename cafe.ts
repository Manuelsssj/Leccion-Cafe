class Cafe {
    private static instances: Map<string, Cafe> = new Map();

    private constructor(public nombre: string, public ingredientes: string, public precio: number) {}

    mostrarInformacion(): string {
        return `${this.nombre} - ${this.ingredientes}: $${this.precio}`;
    }

    static getInstance(nombre: string, ingredientes: string, precio: number): Cafe {
        if (!Cafe.instances.has(nombre)) {
            Cafe.instances.set(nombre, new Cafe(nombre, ingredientes, precio));
        }
        return Cafe.instances.get(nombre)!;
    }
}

function mostrarMenuCafes(listaCafes: Cafe[]): void {
    console.log("Menú de Cafés:");
    for (const cafe of listaCafes) {
        console.log(cafe.mostrarInformacion());
    }
}

function main(): void {
    // Crear diferentes tipos de café usando el Singleton
    const cafeNormal = Cafe.getInstance("Café Normal", "Agua y Café", 2.5);
    const cafeConLeche = Cafe.getInstance("Café con Leche", "Café, Leche", 3.0);
    const mocca = Cafe.getInstance("Mocca", "Café, Leche, Chocolate en Polvo", 3.5);
    const carajillo = Cafe.getInstance("Carajillo", "Café, Whisky", 4.0);

    // Crear lista de cafés
    const listaCafes: Cafe[] = [cafeNormal, cafeConLeche, mocca, carajillo];

    // Mostrar el menú de cafés
    mostrarMenuCafes(listaCafes);
}

// Ejecutar el programa principal directamente
main();

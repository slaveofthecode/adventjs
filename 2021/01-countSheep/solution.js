function countSheep(sheeps) {
    
    const redSheeps = sheeps.filter( (sheep) => sheep.color === 'rojo' );
    const redSheepsWithAAndN = redSheeps.filter( rSheep => {
        const rSheepName = rSheep.name.toLowerCase();
        return rSheepName.includes('a') && rSheepName.includes('n');
    });

    return redSheepsWithAAndN;

}


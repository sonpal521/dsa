function calculateCost(p, g, n, inputs) {
    let cost = 0;
    const lower = Math.min(p, g);
    const maximum = Math.max(p, g);
    let p1_total = 0;
    let p2_total = 0;

    for (let i = 0; i < n; i++) {
        const [p1, p2] = inputs[i].split(' ').map(Number);
        p1_total += p1;
        p2_total += p2;
        
        // Compare individual pairs and calculate cost
        if (p1 >= p2) {
            cost += p1 * lower;
            cost += p2 * maximum;
        } else {
            cost += p2 * lower;
            cost += p1 * maximum;
        }
    }

    // Compare the total sums of pairs
    if (p1_total >= p2_total) {
        cost = Math.max(cost, p1_total * lower + p2_total * maximum);
    } else {
        cost = Math.max(cost, p2_total * lower + p1_total * maximum);
    }

    return cost;
}
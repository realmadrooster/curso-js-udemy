function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}
recursiva(-10);//existe um limite maximo para chamada das funçoes recursivas
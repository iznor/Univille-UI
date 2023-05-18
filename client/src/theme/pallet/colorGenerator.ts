import Color from 'color'

export const colorGenerator = (color: string) => {
    const colors = {}
    for (let i = 0; i < 10; i++) {
        colors[i * 50] = Color(color).lighten(0.05 * (10 - i)).toString()
    }
    colors[500] = color
    for (let i = 1; i < 11; i++) {
        colors[(i + 10) * 50] = Color(color).darken(0.05 * i).toString()
    }
    colors.toString = colors.valueOf = () => colors[500]
    return colors
}

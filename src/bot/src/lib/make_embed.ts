export function successEmbed(title: string) {
    return {
        "author": {
            "name": title,
            "icon_url": "https://cdn.discordapp.com/emojis/1498211479088791592.webp"
        },
        "color": 5763719
    }
}

export function errorEmbed(title: string) {
    return {
        "author": {
            "name": title,
            "icon_url": "https://cdn.discordapp.com/emojis/1498211506293313556.webp"
        },
        "color": 15548997
    }
}

export function infoEmbed() {
    return {
        "color": 5793266
    }
}
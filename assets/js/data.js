const calendarData = [
    { day: 1, type: 'music', content: 'assets/music/Oh lance les dés !.mp3', image: 'assets/images/potion.png', title: 'Chanson : Oh lance les dés !', description: 'Une mélodie entraînante pour commencer l\'aventure ! (Et une potion pour la route)' },
    { day: 2, type: 'image', content: 'assets/images/mimic.png', title: 'Mimique en Pain d\'Épice', description: 'Il a l\'air délicieux, mais attention à vos doigts ! Ce petit monstre est plus rapide qu\'il n\'y paraît.' },
    { day: 3, type: 'image', content: 'assets/images/sword.png', title: 'Épée de Yule', description: 'Une lame enchantée qui brille d\'une lueur chaleureuse. Elle inflige des dégâts radiants supplémentaires aux créatures grincheuses.' },
    // Placeholder data for the rest of the days
    ...Array.from({ length: 21 }, (_, i) => ({
        day: i + 4,
        type: 'text',
        content: 'Surprise à venir !',
        title: `Jour ${i + 4}`,
        description: 'La magie de Noël opère encore...'
    }))
];

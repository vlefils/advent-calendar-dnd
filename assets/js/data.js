const calendarData = [
    { day: 1, type: 'music', content: 'assets/music/Oh lance les dés !.mp3', image: 'assets/images/potion.png', title: 'Chanson : Oh lance les dés !', description: 'Une mélodie entraînante pour commencer l\'aventure ! (Et une potion pour la route)' },
    {
        day: 2,
        type: 'text',
        title: 'Le Journal d\'Eldran',
        description: 'Une page de journal retrouvée dans les cendres...',
        content: `
            <div class="letter-content">
                <p>« UNE HONTE ! C’est une putain de HONTE INTERGALACTIQUE ! Tu veux que je te raconte ? T’es sûr ? Parce que rien que d’y penser, j’ai envie de désintégrer quelque chose qui n’existe même plus !</p>
                <p>Tout a commencé dans ce maudit théâtre. On arrive par les gradins, et qu’est-ce qu’il fait, l’autre paon de Michel ? "L’Ensorceleur" ? Il nous pond un discours ! Un monologue de théâtre amateur en pleine apocalypse ! <em>"Gneugneu je suis la Légende, le Mythe"</em>. Mais ferme-la ! T’es face à un Dieu-Démon et tu fais des rimes ?! J’avais envie de lui coudre la bouche avec mes propres ombres !</p>
                <p>Et Skarnak… Ce salopard, il jubile. Il nous sort son grand jeu : "Bouh, si vous gagnez, vous perdez tout, retour à la case zéro, fini les super-pouvoirs". Et là… LA ! Ça n’a même pas pris une seconde ! Pas une hésitation ! Le Barbare et l’Ensorceleur, ces deux vendus, ces deux prostituées de la gloire, ils ont retourné leur veste INSTANTANÉMENT ! "Ah non, mes objets magiques ! Ah non, ma réputation !" BANDE DE LARVES ! Ils ont préféré condamner le monde entier plutôt que de perdre leur petit confort de "héros" !</p>
                <p>Moi, j’ai dû briser ma malédiction. J’ai dû me laisser bouffer par les ténèbres pour compenser leur lâcheté ! Je me transforme en avatar de cauchemar, je fonce sur Skarnak… Et je me prends qui en pleine poire ? MES PROPRES ÉLÈVES ! Le Barbare et l’Ensorceleur qui me tapent dessus pour protéger le grand méchant ! Le monde à l’envers !</p>
                <p>Et les autres ? Le Rôdeur, le Clerc, la Princesse… Ils essaient de m’aider, mais c’est la foire à la saucisse ! La Princesse balance des rayons de lumière qui crament autant nos fesses que celles du démon ! On se faisait cuire par nos propres alliés ! J’étais là, à essayer de tanker un Dieu, et je devais esquiver les sorts de mes "amis" !</p>
                <p>Le clerc tombe. Bien fait ! Mais attends, le pire arrive. Il revient ! Son âme en colère revient hanter le combat ! Et qu’est-ce qu’il fait, ce génie ? Il attaque Skarnak ? Il attaque les traîtres ? NON ! IL TUE LE DRUIDE ! Le seul mec qui n’avait rien fait, qui hésitait dans son coin ! Il le fume ! Tir allié niveau grand maître ! Bravo le veau !</p>
                <p>J’ai tout donné. Forme 2, puissance max. Mais Skarnak passe en phase finale et m’explose. Je suis mort. Détruit. Anéanti. Pour RIEN.</p>
                <p>Et le spectacle de fin… Par les dieux, j’aurais voulu être aveugle.<br>
                Skarnak gagne. Il leur propose : "Servez-moi ou crevez".<br>
                Et le Nain… Ce tas de muscles sans cerveau… Il se met À GENOUX ! Il lèche le sol ! "Oh oui maître Skarnak, s’il vous plaît, rendez-moi mes copains". T’as pas de dignité ?! T’es un nain ou un paillasson ?!<br>
                L’Ensorceleur ? Il s’est barré ! Il a fui par le portail comme un voleur, la queue entre les jambes ! "Le Mythe" ? Le Mytho oui !</p>
                <p>Le Rôdeur… Le seul qui a eu une once de courage, il se jette sur Skarnak… et se fait décapiter comme un poulet. SCHLACK. Fin de l’histoire. Pathétique.</p>
                <p>Mais la palme… La médaille d’or de la stupidité cosmique… Elle revient au Druide.<br>
                Il vient d’être ressuscité (merci le Nain-paillasson), et qu’est-ce qu’il tente ? Aspirer l’âme d’un DIEU ? T’as cru que t’étais qui ?! Ça rate, évidemment.<br>
                Alors il sort son "Parapluie d’inversion de cause à effet". Un artefact légendaire ! Il pouvait tout changer ! Et il fait quoi ? Il se rate ! Au lieu d’inverser la défaite, il inverse sa propre survie ! Il propulse son âme DIRECTEMENT DANS LE GOSIER DE SKARNAK !<br>
                Le démon l’a gobé comme une cacahuète ! GLOUPS ! Merci pour le dessert !</p>
                <p>Le Clerc s’est enfui en pleurant. La Princesse a demandé à rentrer chez maman.</p>
                <p>Voilà ! C’est fini ! Skarnak a gagné ! Il est Dieu ! La guerre éclate partout, le monde est un enfer, et c’est DE LEUR FAUTE ! J’ai sacrifié mon existence, mon âme, ma magie, pour une bande d’incompétents, de traîtres et de suicidaires !</p>
                <p>Si je pouvais revenir, je les tuerais moi-même avant même qu’ils sortent de leur auberge au niveau 1 ! QUEL GÂCHIS ! »</p>
            </div>
        `
    },
    {
        day: 3,
        type: 'video',
        content: 'assets/video/mich_roll.mp4',
        title: 'You\'ve been Mich\' Rolled',
        description: 'On ne s\'y attendait pas à celle-là...'
    },
    // Placeholder data for the rest of the days
    {
        day: 4,
        type: 'video_music',
        video: 'assets/video/nain_dance.mp4',
        audio: 'assets/music/On a pas besoin d\'ennemis.mp3',
        title: 'Danse du Nain',
        description: 'Quand la bière coule à flots, les nains se déchaînent ! (Montez le son !)'
    },
    // Placeholder data for the rest of the days
    ...Array.from({ length: 20 }, (_, i) => ({
        day: i + 5,
        type: 'text',
        content: 'Surprise à venir !',
        title: `Jour ${i + 5}`,
        description: 'La magie de Noël opère encore...'
    }))
];

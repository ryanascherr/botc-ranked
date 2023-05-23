let characters = [
    {
        name: "Washerwoman",
        description: "The Washerwoman learns that a specific Townsfolk character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Washerwoman is woken, shown two players, and learns the character of one of them.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Townsfolk.',
        flavor: '"Bloodstains on a dinner jacket? No, this is cooking sherry. How careless."',
        examples: "<p>Evin is the Chef, and Amy is the Ravenkeeper. The Washerwoman learns that either Evin or Amy is the Chef.</p><p>Julian is the Imp, and Alex is the Virgin. The Washerwoman learns that either Julian or Alex is the Virgin.</p><p>Marianna is the Spy, and Sarah is the Scarlet Woman. The Washerwoman learns that one of them is the Ravenkeeper. <i>(This happens because the Spy is registering as a Townsfolk—in this case, the Ravenkeeper)</i></p>",
        howToRun: `<p>While preparing the first night, put the Washerwoman's <strong>TOWNSFOLK</strong> reminder token by any Townsfolk character token, and put the Washerwoman's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Washerwoman and point to the players marked <strong>TOWNSFOLK</strong> and <strong>WRONG</strong>. Show the character token marked <strong>TOWNSFOLK</strong> to the Washerwoman. Put the Washerwoman to sleep. Remove the Washerwoman's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Librarian",
        description: "The Librarian learns that a particular Outsider character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Librarian learns that one of two players is a specific Outsider.</li><li>They learn this only once and then learn nothing more.</li><li>The Drunk is an Outsider. If the Librarian learns that one of two players is the Drunk, they do not learn the Townsfolk that the Drunk's player thinks they are.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)',
        flavor: '"Certainly Madam, under normal circumstances, you may borrow the Codex Malificarium from the library vaults. However, you do not seem to be a member."',
        examples: "<p style='margin-top: 0;'>Benjamin is the Saint, and Filip is the Baron. The Librarian learns that either Benjamin or Filip is the Saint.</p><p>There are no Outsiders in this game. The Librarian learns a '0'.</p><p>Abdallah is the Drunk, who thinks they are the Monk, and Douglas is the Undertaker. The Librarian learns that either Abdallah or Douglas is the Drunk. <i>(This happens because the Librarian learns the true character. The Drunk is Abdallah's true character, not the Monk.)</i></p>",
        howToRun: `<p>While preparing the first night, put the Librarian's <strong>OUTSIDER</strong> reminder token by any Outsider character token, and put the Librarian's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Librarian and point to the players marked <strong>OUTSIDER</strong> and <strong>WRONG</strong>. Show the character token marked <strong>OUTSIDER</strong> to the Librarian. Put the Librarian to sleep. Remove the Librarian's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Investigator",
        description: "The Investigator learns that a particular Minion character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Investigator learns that one of two players is a specific Minion.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Minion.',
        flavor: '"It is a fine night for a stroll, wouldn\'t you say, Mister Morozov? Or should I say... BARON Morozov?"',
        examples: "<p>Amy is the Baron, and Julian is the Mayor. The Investigator learns that either Amy or Julian is the Baron.</p><p>Angelus is the Spy, and Lewis is the Poisoner. The Investigator learns that either Angelus or Lewis is the Spy.</p><p>Brianna is the Recluse, and Marianna is the Imp. The Investigator learns that either Brianna or Marianna is the Poisoner. <i>(This happens because the Recluse is registering as a Minion—in this case, the Poisoner.)</i></p>",
        howToRun: `<p>While preparing the first night, put the Investigator's <strong>MINION</strong> reminder token by any Minion character token, and put the Investigator's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Investigator and point to the players marked <strong>MINION</strong> and <strong>WRONG</strong>. Show the character token marked <strong>MINION</strong> to the Investigator. Put the Investigator to sleep. Remove the Investigator's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Chef",
        description: "The Chef knows if evil players are sitting next to each other.",
        intro: "<ul><li>On the first night, the Chef learns exactly how many pairs of evil players there are in total. A pair is two players, but one player may be a part of two pairs. So, two players sitting next to each other is one pair. Three players sitting next to each other is two pairs. Four players sitting next to each other is three pairs. And so on.</li><li>The Chef detects evil Travellers just like other character types, but only if those Travellers joined the game before the Chef acts.</li></ul>",
        ability: 'You start knowing how many pairs of evil players there are.',
        flavor: '"This evening\'s reservations seem odd. Never before has Mrs Mayweather kept company with that scamp from Hudson lane. Yet, tonight, they have a table for two. Strange."',
        examples: `<p>No evil players are sitting next to each other. The Chef learns a "0".</p><p>The Imp is sitting next to the Baron. Across the circle, the Poisoner is sitting next to the Scarlet Woman. The Chef learns a "2".</p><p>An evil Scapegoat is sitting between the Imp and a Minion. Across the circle, two other Minions are sitting next to each other. The Chef learns a "3".</p><p>The Recluse is sitting between the Imp and the Poisoner. The Chef learns a "1". Here, the Recluse is registering as evil for the Imp-Recluse pair, but as good for the Poisoner-Recluse pair</p>`,
        howToRun: '<p>During the first night, wake the Chef. Show the Chef fingers <i>(0, 1, 2, etc.)</i> equaling the number of pairs of neighboring evil players. Put the Chef to sleep.</p>',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Empath",
        description: "The Empath keeps learning if their living neighbours are good or evil.",
        intro: "<ul><li>The Empath only learns how many of their neighbors are evil, not <i>which</i> one is evil.</li><li>The Empath does not detect dead players. So, if the Empath is sitting next to a dead player, they do not get info about that dead player. Instead, they get info about the closest alive player in that direction.</li><li>The Empath acts after the Demon, so if the Demon kills one of the Empath's alive neighbors, the Empath does not learn about the now-dead player. The Empath's information is accurate at dawn, not at dusk.</li></ul>",
        ability: 'Each night, you learn how many of your 2 alive neighbours are evil.',
        flavor: '"My skin prickles. Something is not right here. I can feel it."',
        examples: '<p>The Empath neighbors two good players—a Soldier and a Monk. The Empath learns a "0".</p><p>The next day, the Soldier is executed. That night, the Monk is killed by the Imp. The Empath now detects the alive players sitting next to the Soldier and the Monk, who are a Librarian and an evil Gunslinger. The Empath now learns a "1".</p><p>On a later night, there are only three players left alive: the Empath, the Imp, and the Baron. No matter who is seated where, the Empath learns a "2".</p>',
        howToRun: "Each night, wake the Empath. Show them fingers <i>(0, 1, or 2)</i> equaling the number of evil players neighboring the Empath. Put the Empath to sleep.",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Fortune Teller",
        description: "The Fortune Teller can detect who the Demon is, but sometimes thinks good players are Demons.",
        intro: "<ul><li>Each night, the Fortune Teller chooses two players and learns if at least one of them is a Demon. They do not learn which of them is a Demon, just that one of them is. If neither is the Demon, they learn this instead.</li><li>Unfortunately, one player, called the Red Herring, will register as a Demon to the Fortune Teller if chosen. The Red Herring is the same player throughout the entire game. This player may be any good player, even the Fortune Teller themself, and the Fortune Teller does not know which player it is.</li><li>The Fortune Teller may choose any two players—alive or dead, or even themself. If they choose a dead Demon, then the Fortune Teller still receives a nod.</li>",
        ability: 'Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.',
        flavor: '"I sense great evil in your soul! But... that could just be your perfume. I am allergic to Elderberry."',
        examples: `<p>The Fortune Teller chooses the Mayor and the Undertaker, and learns a "no".</p><p>The Fortune Teller chooses the Imp and the Empath, and learns a "yes".</p><p>The Fortune Teller chooses an alive Imp and a dead Imp, and learns a "yes".</p><p>The Fortune Teller chooses themself and a Saint, who is the Red Herring. The Fortune Teller learns a "yes".</p>`,
        howToRun: `<p>While preparing the first night, put the Fortune Teller's <strong>RED HERRING</strong> reminder token by any good character token, marking that player as the Red Herring.</p><p>Each night, wake the Fortune Teller. The Fortune Teller points at any two players. If either chosen player is a Demon or the Red Herring, nod your head yes. Otherwise, shake your head no. Put the Fortune Teller to sleep.</p><p class="callout-box">In smaller games, making the Fortune Teller their own Red Herring is sometimes advised, as the Fortune Teller gets more information that way.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Undertaker",
        description: "The Undertaker learns which character was executed today.",
        intro: "<ul><li>The player must have died from execution for the Undertaker to learn who they are. Deaths during the day for other reasons, such as the Gunslinger choosing a player to kill, or the exile of a Traveller, do not count.</li><li>The Undertaker wakes each night except the first, as there have been no executions yet.</li><li>If nobody died today, the Undertaker learns nothing. The Storyteller either does not wake the Undertaker at night, or wakes them but does not show a token.</li><li>If the Drunk is executed, the Undertaker is shown the Drunk character token, not the token for the Townsfolk that the Drunk player thought they were.</li></ul>",
        ability: 'Each night*, you learn which character died by execution today.',
        flavor: '"Hmmm....what have we here? The left boot is worn down to the heel, with flint shavings under the tongue. This is the garb of a Military man."',
        examples: `<p>The Mayor is executed today. That night, the Undertaker is shown the Mayor token.</p><p>The Drunk, who thinks they are the Virgin, is executed today. The Undertaker is shown the Drunk token, because the Undertaker learns the actual character of the player, not the character that the player thinks they are.</p><p>The Spy is executed. Two Travellers are exiled. That night, the Undertaker is shown the Butler token, because the Spy is registering as the Butler, and because exiles are not executions.</p><p>Nobody was executed today. That night, the Undertaker does not wake.</p>`,
        howToRun: `<p>If a player dies by execution, put the Undertaker's <strong>DIED TODAY</strong> reminder token by the dead player's character token.</p><p>Each night except the first, if any player died by execution today, wake the Undertaker. Show the character token marked <strong>DIED TODAY</strong> to the Undertaker. Put the Undertaker to sleep. Remove the Undertaker's reminder token when convenient.</p><p class="callout-box">In Trouble Brewing, there can only be one execution per day, and every execution causes a player to die. In other editions, there may be more than one execution per day (in which case the Storyteller chooses which character to show the Undertaker) or the execution does not cause a death (in which case the Undertaker learns nothing).</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Monk",
        description: "The Monk protects others from the Demon.",
        intro: "<ul><li>Each night except the first, the Monk may choose to protect any player except themself.</li><li>If the Demon attacks a player who has been protected by the Monk, then that player does not die. The Demon does not get to attack another player—there is simply no death tonight.</li><li>The Monk does not protect against the Demon nominating and executing someone.</li></ul>",
        ability: 'Each night*, choose a player (not yourself): they are safe from the Demon tonight.',
        flavor: '"\'Tis an ill and deathly wind that blows tonight. Come, my brother, take shelter in the abbey while the storm rages. By my word, or by my life, you will be safe."',
        examples: `<p>The Monk protects the Fortune Teller. The Imp attacks the Fortune Teller. Nobody dies tonight.</p><p>The Monk protects the Mayor, and the Imp attacks the Mayor. The Mayor's "another player dies" ability does not trigger, because the Mayor is safe from the Imp. Nobody dies tonight.</p><p>The Monk protects the Imp. The Imp chooses to kill themself tonight, but nothing happens. The Imp stays alive and a new Imp is not created.</p>`,
        howToRun: `<p>Each night except the first, wake the Monk. The Monk points at any player except themself. <i>(If the Monk points at themself, shake your head no and prompt them to point at another player.)</i> Put the Monk to sleep. Put the Monk's <strong>SAFE</strong> reminder token by the chosen player's character token.</p><p>If the Demon attacks the player marked <strong>SAFE</strong>, the player remains alive. <i>(Do not mark them with the Demon's <strong>DEAD</strong> reminder token or add a shroud as you normally would.)</i> At dawn, declare that no one died at night. </i>(Do not say why.)</i></p><p>At dawn, remove the <strong>SAFE</strong> reminder token.</p><p class="callout-box">In other editions, Demons may have abilities other than killing. The Monk's protection also prevents all other harmful effects of the Demon's ability, such as poisoning or turning the protected player evil.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Ravenkeeper",
        description: "The Ravenkeeper learns any player's character, but only if the Ravenkeeper dies at night.",
        intro: "<ul><li>The Ravenkeeper is woken on the night that they die, and chooses a player immediately.</li><li>The Ravenkeeper may choose a dead player if they wish.</li></ul>",
        ability: 'If you die at night, you are woken to choose a player: you learn their character.',
        flavor: '"My birds will avenge me! Fly! Fly, my sweet and dutiful pets! Take your message to those in dark corners! To the manor and to the river! Let them read of the nature of my death."',
        examples: `<p>The Ravenkeeper is killed by the Imp, and then wakes to choose a player. After some deliberation, they choose Ben. Ben is the Empath, and the Ravenkeeper learns this.</p><p>The Imp attacks the Mayor. The Mayor doesn't die, but the Ravenkeeper dies instead, due to the Mayor's ability. The Ravenkeeper is woken and chooses Doug, who is a dead Recluse. The Ravenkeeper learns that Doug is the Scarlet Woman, since the Recluse is registering as a Minion.</p>`,
        howToRun: `<p>If the Ravenkeeper died tonight, wake them. They point at any player. Show the chosen player's character token to the Ravenkeeper. Put the Ravenkeeper to sleep.</p><p class="callout-box">We advise you to discourage or even ban players from talking about what they are doing at night as they are doing it.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Virgin",
        description: "The Virgin is safe from execution…perhaps. Players that nominate the Virgin usually die.",
        intro: "<ul><li>If a Townsfolk nominates the Virgin, then that Townsfolk is executed immediately. Because there can only be one execution per day, the nomination process immediately ends, even if a player was about to die.</li><li>Only Townsfolk are executed due to the Virgin's ability. If an Outsider, Minion, or Demon nominates the Virgin, nothing happens, and voting continues.</li><li>The Virgin's ability is powerful because if a Townsfolk nominates them and dies, then both characters are almost certainly Townsfolk.</li><li>After being nominated for the first time, the Virgin loses their ability, even if the nominator did not die, and even if the Virgin was poisoned or drunk.</li></ul>",
        ability: 'The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.',
        flavor: '"I am pure. Let those who are without sin cast themselves down and suffer in my stead. My reputation shall not be stained with your venomous accusations."',
        examples: `<p>The Washerwoman nominates the Virgin. The Washerwoman dies, and voting ends.</p><p>The Drunk, who thinks they are the Chef, nominates the Virgin. The Drunk remains alive and the Virgin loses their ability, because the Drunk is an Outsider, not a Townsfolk. Players may now vote on whether or not to execute the Virgin.</p><p>A dead player nominates the Virgin. The dead, however, cannot nominate. The Storyteller declares that this nomination does not count. The Virgin does not lose their ability.</p>`,
        howToRun: `<p>If the first player to ever nominate the Virgin is a Townsfolk, immediately declare that the nominating player is executed. That player <strong>dies</strong>—put a shroud on their character token in the Grimoire. <strong>The Virgin loses their ability</strong>—put the Virgin's <strong>NO ABILITY</strong> reminder token by the Virgin token. End the nomination process and proceed to the night phase. <i>(No one else can be executed today.)</i></p><p>If the first player to ever nominate the Virgin is not a Townsfolk, continue the vote as normal. <strong>The Virgin loses their ability</strong>—put the Virgin's <strong>NO ABILITY</strong> reminder token by the Virgin token.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Slayer",
        description: "The Slayer can kill the Demon by guessing who it is.",
        intro: "<ul><li>The Slayer can choose to use their ability at any time during the day, and must declare to everyone when they're using it. If the Slayer chooses the Demon, the Demon dies immediately. Otherwise, nothing happens.</li><li>The players do not learn the identity of the dead player. After all, it may have been the Recluse!</li><li>A Slayer that uses their ability while poisoned or drunk may not use it again.</li><li>The Slayer will want to choose an alive player. Even if the Slayer chooses a dead Imp, nothing happens, because a dead player can't die again.</li><li>Players may say whatever they want at any time, so a player who's pretending to be the Slayer may pretend to use the Slayer ability.</li></ul>",
        ability: 'Once per game, during the day, publicly choose a player: if they are the Demon, they die.',
        flavor: '"Die."',
        examples: `<p>The Slayer chooses the Imp. The Imp dies, and good wins!</p><p>The Slayer chooses the Recluse. The Recluse dies, but the game continues, because the Recluse is registering as the Imp.</p><p>The Imp is bluffing as the Slayer. They declare that they use their Slayer ability on the Scarlet Woman. Nothing happens.</p>`,
        howToRun: `<p>During the day, the Slayer can declare that they wish to use their ability. If so, the Slayer points at any player. If the chosen player is an alive Demon, declare that the chosen player <strong>dies</strong>—put a shroud on their character token in the Grimoire. If the chosen player is not an alive Demon, say "Nothing happens." Either way, <strong>the Slayer loses their ability</strong>—put the Slayer's <strong>NO ABILITY</strong> reminder token by the Slayer token.</p><p class="callout-box">If a player is bluffing as the Slayer and declares they wish to use their ability, act as if they were indeed the Slayer—allow time for discussion, let them make the decision, and act like you're fiddling with tokens in your Grimoire, then say "Nothing happens."</p><p class="callout-box">When the Slayer declares that they wish to use their ability, give the group a minute or two to discuss who the Slayer should choose. This allows the group to feel responsible for the win (or the loss!), but the Slayer always makes the final choice.</p></p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Soldier",
        description: "The Soldier cannot be killed by the Demon.",
        intro: "<ul><li>The Soldier cannot die from the Demon's ability. So, if the Imp attacks the Soldier at night, nothing happens. Nobody dies. The Imp does not get to choose another player to attack instead.</li><li>The Soldier can still die by execution, even if the nominator was the Demon. The Soldier is protected from the Demon's ability to kill, not the actions of the Demon player.</li></ul>",
        ability: 'You are safe from the Demon.',
        flavor: '"As David said to Goliath, as Theseus said to the Minotaur, as Arjuna said to Bhagadatta... No."',
        examples: `<p>The Imp attacks the Soldier. The Soldier does not die, so nobody dies that night.</p><p>The Poisoner poisons the Soldier, then the Imp attacks the Soldier. The Soldier dies, because they have no ability while poisoned.</p><p>The Imp attacks the Mayor. The Storyteller chooses that the Soldier dies instead. However, because the Soldier cannot be killed by the Demon, nobody dies that night.</p>`,
        howToRun: `<p>During the night, if the Demon attacks the Soldier, the Soldier remains alive. <i>(At dawn, declare that no one died at night.)</i></p><p class="callout-box">In other editions, Demons may have abilities other than killing. The Soldier is also protected from all other harmful effects of the Demon's ability, such as poisoning or turning the Soldier evil.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Mayor",
        description: "The Mayor can win by peaceful means on the final day.",
        intro: `<ul><li>To survive, the Mayor sometimes "accidentally" gets someone else killed. If the Mayor is attacked and would die, the Storyteller may choose that a different player dies. Nobody learns how they died at night, just that they died.</li><li>If there are just three players alive at the end of the day, and no execution occurred that day, then the game ends and good wins.</li><li>Travellers count as players for the Mayor's victory, so must be exiled first. Remember that exiles are not executions.</li><li>Fabled don't count as players for the Mayor's victory, as the Storyteller isn't a player.</li><li>If the Demon attacks the Mayor, and the Storyteller instead chooses a dead player, the Soldier, or a player protected by the Monk, that player does not die tonight.</li></ul>`,
        ability: 'If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.',
        flavor: '"We must put our differences aside, and cease this senseless killing. We are all taxpayers after all. Well, most of us."',
        examples: `<p>The Imp attacks the Mayor. The Storyteller chooses that the Ravenkeeper dies instead. The next day, there are three players alive. There are no nominations for execution. Good wins.</p><p>Five players are alive, including two Travellers. Both Travellers are exiled, and the vote is tied between the remaining players. Because a tied vote means neither player is executed, good wins.</p>`,
        howToRun: `<p>During the night, if the Mayor would die, you choose if the Mayor actually dies, or if the Mayor remains alive and another character <strong>dies</strong> instead—put the Demon's <strong>DEAD</strong> reminder token by that character token instead of the Mayor, and put a shroud on that character token instead of the Mayor.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Butler",
        description: "The Butler may only vote when their Master votes.",
        intro: "<ul><li>Each night, the Butler chooses a player to be their Master. This may be the same player as last night or a different one.</li><li>If the Master has their hand raised to vote, or if the Master's vote has already been counted, the Butler may raise their hand to vote.</li><li>If the Master has their hand down, signaling that they are not voting, or if the Master lowers their hand before their vote is tallied, the Butler must lower their hand too.</li><li>It is not the Storyteller's responsibility to monitor the Butler. They're responsible for their own voting. Deliberately voting when they shouldn't is considered cheating.</li><li>Because exiles are never affected by abilities, the Butler can vote freely for an exile.</li><li>Dead players may only raise their hand to vote if they have a vote token. If the Butler chooses a dead player as their Master, this still applies.</li><li>The Butler is never forced to vote.</li><li>The Butler's vote may be tallied by the Storyteller before or after their Master's. Seating position is not important.</li></ul>",
        ability: 'Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.',
        flavor: '"Yes, sir...<br>No, sir...<br>Certainly, sir."',
        examples: `<p>The Butler chooses Abdallah to be their Master. Tomorrow, if Abdallah raises his hand to vote on an execution, then the Butler may too. If not, the Butler may not raise their hand.</p><p>A nomination is in progress. The Butler and their Master both have their hands raised to vote. As the Storyteller is counting votes, the Master lowers their hand at the last second. The Butler must lower their hand immediately.</p><p>The Butler is dead. Because dead players have no ability, the Butler may vote with their vote token at any time.</p>`,
        howToRun: `<p>Each night, wake the Butler. They point at any player. Mark this player with the <strong>MASTER</strong> reminder token. Put the Butler to sleep.</p><p>During a nomination, the Butler may only have their hand raised to vote if the Master has their hand raised to vote or if the Master's vote has already been counted.</p><p class="callout-box">If the Butler accidentally votes illegally, tally the Butler's vote anyway. If you don't, the total will be less than it should be, and all players will know which player is the Butler, which is unfair for the evil team. Mistakes happen. Just play on and have a private chat later.</p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Drunk",
        description: "The Drunk player thinks they are a Townsfolk and has no idea that they are actually the Drunk.",
        intro: "<ul><li>During setup, the Drunk's token does not go in the bag. Instead, a Townsfolk character token goes in the bag, and the player who draws that token is secretly the Drunk for the whole game. The Storyteller knows. The player does not.</li><li>The Drunk has no ability. Whenever their Townsfolk ability would affect the game in some way, it doesn't. However, the Storyteller pretends that the player is the Townsfolk they think they are. If that character would wake at night, the Drunk wakes to act as if they are that Townsfolk. If that Townsfolk would gain information, the Storyteller may give them false information instead—and the Storyteller is encouraged to do so.</li></ul>",
        ability: 'You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.',
        flavor: `"I'm only a *hic* social drinker, my dear. Admittedly, I am a heavy *burp* socializer."`,
        examples: `<p>The Drunk, who thinks they are the Soldier, is attacked by the Imp. The Drunk dies.</p><p>The Drunk, who thinks they are the Empath, wakes and learns a "0" even though they are sitting next to one evil player. The next night, they learn a "1".</p><p>The Drunk, who thinks they are the Ravenkeeper, is killed at night. They choose the Saint, but learn that this player is the Poisoner.</p><p>The Fortune Teller is executed. That night, the Drunk, who thinks they are the Undertaker, learns that the Drunk died today.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, remove the Drunk token and add a Townsfolk character token. Add the Drunk's <strong>IS THE DRUNK</strong> reminder token to the Grimoire. Put the swapped Townsfolk character token in the bag, not the Drunk character token.</p><p>While preparing the first night, put the Drunk's <strong>IS THE DRUNK</strong> reminder token by any Townsfolk character token, changing that player's character to the Drunk. They are now an Outsider, and do not have the ability of this Townsfolk character. <i>(But they think they do.)</i></p><p>During the game, act as if the Drunk is actually this Townsfolk character. <i>(If that character would wake to act at night, the Drunk wakes to act. If their ability would give them information, you can give false information to them if you wish. See "Drunkenness and Poisoning" in the rulebook.)</i></p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Recluse",
        description: "The Recluse appears evil but is actually good.",
        intro: "<ul><li>Whenever the Recluse's alignment is detected, the Storyteller chooses whether the Recluse registers as good or evil.</li><li>Whenever the Recluse is targeted by an ability that affects specific Minions or Demons, the Storyteller chooses whether the Recluse registers as that specific Minion or Demon.</li><li>The Recluse may register as either good or evil, or as an Outsider, Minion, or Demon, at different parts of the same night. The Storyteller chooses whatever is most interesting.</li><li>A Recluse that registers as a particular Minion or Demon does not have this character's ability. For example, a Recluse that registers as a Poisoner does not wake at night and cannot poison a player.</li></ul>",
        ability: 'You might register as evil & as a Minion or Demon, even if dead.',
        flavor: '"Garn git ya darn grub ya mitts ofma lorn yasee. Grr. Natsy pikkins yonder southwise ye begittin afta ya! Git! Me harvy no so widda licks and demmons no be fightin\' hadsup ne\'er ma kin. Git, assay!"',
        examples: `<p>The Slayer uses their ability on the Recluse. The Storyteller decides that the Recluse registers as the Imp, so the Recluse dies. The Slayer believes that they just killed the Imp.</p><p>The Empath, who neighbors the Recluse and the Monk, learns she is neighboring one evil player. The next night, the Empath learns she is neighboring no evil players.</p><p>The Investigator learns that either the Recluse or the Saint is the Scarlet Woman.</p><p>The Recluse is executed. The Undertaker learns that the Imp was executed.</p><p>The Recluse neighbors the Imp and an evil Traveller. Because showing a "2" to the Chef might be too revealing, the Storyteller gives the Chef true information instead—a "0".</p>`,
        howToRun: `<p>Each time the Recluse is targeted by an ability that detects or affects evil characters, choose which character and alignment the Recluse registers as. <i>(Do whatever is appropriate, such as showing an evil character token, nodding, giving finger signals, or allowing an ability to work that would normally only affect evil, Minion, or Demon players.)</i></p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Saint",
        description: "The Saint ends the game if they are executed.",
        intro: "<ul><li>If the Saint dies by execution, the game ends. Good loses and evil wins.</li><li>If the Saint dies in any way other than execution—such as the Demon killing them—then the game continues.</li></ul>",
        ability: 'If you die by execution, your team loses.',
        flavor: '"Wisdom begets peace. Patience begets wisdom. Fear not, for the time shall come when fear too shall pass. Let us pray, and may the unity of our vision make saints of us all."',
        examples: `<p>There are seven players alive and nominations are in progress. The Saint gets four votes and is about to die. Then, the Baron is nominated but only gets three votes. No more nominations occur today. The Saint is executed, and evil wins.</p><p>The Imp is nominated, and the players vote. The Gunslinger kills the Saint. The Saint dies, but the game continues.</p><p>The Saint is executed. However, the Scapegoat's ability is triggered, so the Scapegoat dies instead. The game continues, because the Saint did not die.</p>`,
        howToRun: `<p>If the Saint dies by execution, declare that the game ends and evil wins.</p><p class="callout-box">The Saint's ability has the strange phrase "your team loses." In Trouble Brewing, this will always mean "evil wins" because the Saint is always good. In other editions, it is possible for characters to change alignment. If the evil Saint is executed, good wins.</p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Poisoner",
        description: "The Poisoner secretly disrupts character abilities.",
        intro: `<ul><li>Each night, the Poisoner chooses someone to poison for that night and the entire next day.</li><li>A poisoned player has no ability, but the Storyteller pretends they do. They do not affect the game in any real way. However, to keep up the illusion that the poisoned player is not poisoned, the Storyteller wakes them at the appropriate time and goes through the motions as if they were not poisoned. If their ability gives them information, the Storyteller may give them false information.</li><li>If a poisoned player uses a "once per game" ability while poisoned, they cannot use their ability again.</li></ul>`,
        ability: 'Each night, choose a player: they are poisoned tonight and tomorrow day.',
        flavor: '"Add compound Alpha to compound Beta... NOT TOO MUCH!"',
        examples: `<p>During the night, the Poisoner poisons the Slayer. The next day, the Slayer tries to slay the Imp. Nothing happens. The Slayer now has no ability.</p><p>The poisoned Empath, who neighbors two evil players, learns a "0". The next night, the Empath, no longer poisoned, learns the correct information: a "2".</p><p>The Investigator is poisoned. They learn that one of two players is the Baron, even though neither is a Minion. <i>(Or they could learn the right players, but the wrong Minion type.)</i></p><p>The Undertaker is poisoned. Even though the Imp died today, they learn that the Virgin died. A few days later, a poisoned Saint is executed and dies, and the game continues.</p><p>The Poisoner poisons the Mayor, then becomes the Imp. The Mayor is no longer poisoned because there is no Poisoner in play.</p>`,
        howToRun: `<p>Each night, wake the Poisoner. They point at any player. The chosen player becomes <strong>poisoned</strong>—put the <strong>POISONED</strong> reminder token by the chosen player's character token. Put the Poisoner to sleep. <i>(This poisoned player wakes and acts normally. They have no ability, but they think they do. If their ability would give them information, you can give false information to them if you wish. See “Drunkenness and Poisoning” in the rulebook.)</i></p><p>Each dusk, the poisoned player becomes <strong>healthy</strong>—remove their <strong>POISONED</strong> reminder.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Spy",
        description: "The Spy knows who everyone is. They appear good, but are actually evil.",
        intro: "<ul><li>If any character has an ability that would detect or affect a good player, then the Spy might register as good to that character. If any character has an ability that detects Townsfolk or Outsiders, then the Spy might register as a specific Townsfolk or Outsider to that player. It is the Storyteller's choice as to what the Spy registers as, even as many characters or both alignments during the same night.</li><li>A Spy that registers as a particular Townsfolk or Outsider does not have this character's ability. For example, a Spy that registers as a Slayer cannot slay the Demon.</li></ul>",
        ability: 'Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.',
        flavor: '"Any brewmaster worth their liquor,<br>knows no concoction pours trouble quicker,<br>than one where spies seem double."',
        examples: `<p>The Washerwoman learns that either Abdallah or Doug is the Ravenkeeper. Abdallah is the Monk, and Doug is the Spy registering as the Ravenkeeper.</p><p>The Spy neighbors the Imp and the Empath. The Chef learns a "1" because the Spy is registering as evil. Later that night, the Empath learns a "0" because the Spy is now registering as good.</p><p>The Spy nominates the Virgin and is executed by the Virgin's ability, because the Storyteller chooses that the Spy registers as a Townsfolk. That night, the Undertaker learns that the Drunk died today, because the Spy is now registering as the Drunk.</p>`,
        howToRun: `<p>Each night, wake the Spy and show them the Grimoire for as long as they need. Put the Spy to sleep.</p><p>Each time the Spy is targeted by an ability that detects or affects good characters, choose what character and alignment the Spy registers as. <i>(Do whatever is appropriate, such as showing a good character token, nodding, giving finger signals, or allowing an ability to work that would normally only affect good, Townsfolk, or Outsider players.)</i></p><p class="callout-box">Remember to keep your Grimoire tidy and show it to the Spy in the correct orientation, so the Spy can easily see who is who.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Baron",
        description: "The Baron changes the number of Outsiders in play.",
        intro: "<ul><li>This change happens during setup, and it does not revert if the Baron dies. A change in characters during setup, regardless of what happens during the game, is shown on character sheets and tokens in square brackets at the end of a character's description—like [this].</li><li>The added Outsiders always replace Townsfolk, not other character types.</li></ul",
        ability: 'There are extra Outsiders in play. [+2 Outsiders]',
        flavor: '"This town has gone to the dogs, what? Cheap foreign labor... that\'s the ticket. Stuff them in the mine, I say. A bit of hard work never hurt anyone, and a clip\'o\'the ears to any brigand who says otherwise. It\'s all about the bottom line, what?"',
        examples: `<p>The game is being set up for seven players, with five Townsfolk, one Minion, and one Demon. Because the Minion is the Baron, the Storyteller removes two Townsfolk tokens and adds a Saint and a Butler token. In total, tokens for three Townsfolk, two Outsiders, one Minion, and one Demon go in the bag for the players to draw from.</p><p>The game is being set up for fifteen players, with nine Townsfolk, two Outsiders, three Minions, and one Demon. Because the Baron is in play, the Storyteller must add a Drunk and a Recluse. So, they remove the Monk token and add a Recluse token. Then, instead of adding the Drunk character token, they add the Drunk's "Is the Drunk" reminder token to the Grimoire…because this game, one player isn't a Townsfolk—they are an Outsider: the Drunk. All these character tokens go into the bag for the players to draw from.</p>`,
        howToRun: `<p>While setting up the game, remove any two Townsfolk character tokens and add any two Outsider character tokens. <i>(If you add the Drunk, remember to follow its setup instructions as well.)</i> These Outsider tokens go into the bag instead of the Townsfolk tokens.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Scarlet Woman",
        ability: 'If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don\'t count)',
        script: "tb"
    },
    {
        name: "Imp",
        ability: 'Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.',
        group: "Demon",
        script: "tb"
    }
]

$(".test").click(function() {
    myFunction();
})

function myFunction() {
    let arrayOfChallengers = [];
    $.each( characters, function(){
        if (this.group == "Outsider") {
            arrayOfChallengers.push(this.name);
        }
    });
    getMatchups(arrayOfChallengers);
    // fight(arrayOfChallengers);
}

function getMatchups(arrayOfChallengers) {
    console.log(arrayOfChallengers);
    let arrayOfMatchups = [];
    let length = arrayOfChallengers.length;
    console.log(length);
    $.each( arrayOfChallengers, function(index) {
        for (let i = index; i < length-1; i++) {
            arrayOfMatchups.push(`${this} vs ${arrayOfChallengers[i+1]}`);
        }
    })
    console.log(arrayOfMatchups);
    showMatchup(arrayOfMatchups);
}

function showMatchup(arrayOfMatchups) {
    let length = arrayOfMatchups.length;
    let randomMatchupNumber = Math.floor(Math.random() * (length));
    console.log(arrayOfMatchups[randomMatchupNumber]);
    let fighters = arrayOfMatchups[randomMatchupNumber].split(" vs ");
    console.log(fighters);
    fight(fighters[0], fighters[1]);
}

function fight(fighter1, fighter2) {
    fighter1 = getName(fighter1);
    fighter2 = getName(fighter2);
    $("main").append(`<div style="max-width: 100px"><img style="max-width: 100%" src="./img/${fighter1}.png"></div>`)
    $("main").append(`<div style="max-width: 100px"><img style="max-width: 100%" src="./img/${fighter2}.png"></div>`)
}

function getName(name) {
    name = name.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    return(name);
};
// jQuery Document Ready
$(document).ready(function() {
    
    // Sample Data - Replace with your actual data
    const gamesData = {
        editorsChoice: [
            { name: "AM2R - Metroid 2 Remake: Return of Samus", url: "#", img: "https://dl.apkawards.com/moda/dl24/games/AM2R/img/AM2R.png", rating: 3.5, votes: 4 },
            { name: "Streets of Rogue", url: "#", img: "https://dl.apkawards.com/moda/dl28/games/com.StreetsofRogue.m3839/img/com.StreetsofRogue.m3839.png", rating: 3.75, votes: 12 },
            { name: "Worms W.M.D: Mobilize", url: "#", img: "https://dl.apkawards.com/moda/dl30/games/com.Team17.WormsWMD/img/com.Team17.WormsWMD.png", rating: 3.8, votes: 5 },
            { name: "Happy Wheels", url: "#", img: "https://dl.apkawards.com/moda/dl25/games/com.fancyforce.happywheels/img/com.fancyforce.happywheels.png", rating: 3.89, votes: 9 },
            { name: "Motorsport Manager Mobile 3", url: "#", img: "https://dl.apkawards.com/moda/dl17/games/com.playsportgames.mmm3/img/com.playsportgames.mmm3.png", rating: 3.33, votes: 98 },
            { name: "Dungreed", url: "#", img: "https://dl.apkawards.com/moda/dl13/games/com.teamhoray.dungreed/img/com.teamhoray.dungreed.png", rating: 3.56, votes: 9 },
            { name: "CarX Drift Racing 2", url: "#", img: "https://dl.apkawards.com/moda/dl20/games/com.carxtech.carxdr2/img/com.carxtech.carxdr2.png", rating: 3.65, votes: 62 },
            { name: "Dungeon Clawler", url: "#", img: "https://dl.apkawards.com/moda/dl10/games/com.strayfawnstudio.dungeonclawlermobile/img/com.strayfawnstudio.dungeonclawlermobile.png", rating: 3.67, votes: 3 }
        ],
        topNewGames: [
            { name: "Inscryption Mobile", url: "#", img: "https://dl.apkawards.com/moda/dl45/games/Inscryption/img/Inscryption.png", rating: 4, votes: 1 },
            { name: "Backpack Battles", url: "#", img: "https://dl.apkawards.com/moda/dl45/games/com.playwithfurcifer.bpb.android/img/com.playwithfurcifer.bpb.android.png", rating: 3.5, votes: 2 },
            { name: "Red Dead Redemption", url: "#", img: "https://dl.apkawards.com/moda/dl34/games/Red.Dead.Redemption/img/Red.Dead.Redemption.png", rating: 3.49, votes: 340 },
            { name: "WWE 2K25 Mobile", url: "#", img: "https://dl.apkawards.com/moda/dl34/games/WWE.2K25/img/WWE.2K25.png", rating: 4, votes: 1 },
            { name: "Deep Rock Galactic: Survivor", url: "#", img: "https://dl.apkawards.com/moda/dl41/games/com.ghostshippublishing.deeprockgalacticsurvivor/img/com.ghostshippublishing.deeprockgalacticsurvivor.png", rating: 4, votes: 1 },
            { name: "Way of the Hunter Wild Europe", url: "#", img: "https://dl.apkawards.com/moda/dl34/games/com.hg.woth.tv/img/com.hg.woth.tv.png", rating: 5, votes: 2 },
            { name: "Hollow Knight: Silksong", url: "#", img: "https://dl.apkawards.com/moda/gta8/games/Hollow-Knight-Silksong/img/Hollow-Knight-Silksong.png", rating: 4, votes: 1 },
            { name: "GTA: Vice City - Definitive", url: "#", img: "https://dl.apkawards.com/moda/gta8/games/com.rockstargames.gtavc.de/img/com.rockstargames.gtavc.de.png", rating: 4, votes: 1 }
        ],
        popularGames: [
            { name: "Minecraft: Pocket Edition", url: "#", img: "https://dl.apkawards.com/moda/dl22/games/com.mojang.minecraftpe/img/com.mojang.minecraftpe.png", rating: 3.41, votes: 17483 },
            { name: "Grand Theft Auto: San Andreas", url: "#", img: "https://dl.apkawards.com/moda/dl13/games/com.rockstargames.gtasa/img/com.rockstargames.gtasa.png", rating: 3.49, votes: 9096 },
            { name: "Terraria", url: "#", img: "https://dl.apkawards.com/moda/dl12/games/com.and.games505.TerrariaPaid/img/com.and.games505.TerrariaPaid.png", rating: 3.37, votes: 583 },
            { name: "Stardew Valley", url: "#", img: "https://dl.apkawards.com/moda/dl10/games/com.chucklefish.stardewvalley/img/com.chucklefish.stardewvalley.png", rating: 3.7, votes: 840 },
            { name: "Grand Theft Auto: Vice City", url: "#", img: "https://dl.apkawards.com/moda/dl4/games/com.rockstargames.gtavc/img/com.rockstargames.gtavc.png", rating: 3.45, votes: 481 },
            { name: "Bloons TD 6", url: "#", img: "https://dl.apkawards.com/moda/dl16/games/com.ninjakiwi.bloonstd6/img/com.ninjakiwi.bloonstd6.png", rating: 3.39, votes: 892 },
            { name: "Toca Boca World", url: "#", img: "https://dl.apkawards.com/moda/dl4/games/com.tocaboca.tocalifeworld/img/com.tocaboca.tocalifeworld.png", rating: 3.73, votes: 264 },
            { name: "Bully: Anniversary Edition", url: "#", img: "https://dl.apkawards.com/moda/dl5/games/com.rockstargames.bully/img/com.rockstargames.bully.png", rating: 3.45, votes: 1788 }
        ],
        updateGames: [
            { name: "Melon Sandbox Melon Playground", version: "34.5", mod: "No Ads, Free Shopping", url: "#", img: "https://dl.apkawards.com/moda/dl27/games/com.TwentySeven.MelonPlayground/img/com.TwentySeven.MelonPlayground.png", rating: 4.14, votes: 14 },
            { name: "State Connect: traffic control", version: "1.180", mod: "Free Reward", url: "#", img: "https://dl.apkawards.com/moda/dl19/games/com.TwinCrab.Motorpolia/img/com.TwinCrab.Motorpolia.png", rating: 4.25, votes: 4 },
            { name: "House Flipper", version: "1.630", mod: "Unlimited Gold", url: "#", img: "https://dl.apkawards.com/moda/dl24/games/com.imaginalis.HouseFlipperMobile/img/com.imaginalis.HouseFlipperMobile.png", rating: 3.85, votes: 13 },
            { name: "My Tiny Tower", version: "0.7.9", mod: "Money", url: "#", img: "https://dl.apkawards.com/moda/gta8/games/com.arcade.idle.tiny.tower/img/com.arcade.idle.tiny.tower.png", rating: 4, votes: 1 },
            { name: "Godzilla: Strike Zone", version: "1.0.0", mod: null, url: "#", img: "https://dl.apkawards.com/moda/dl5/games/com.wb.goog.godzilla.strikezone/img/com.wb.goog.godzilla.strikezone.png", rating: 3.57, votes: 14 },
            { name: "Gladiators: Survival in Rome", version: "1.37.1", mod: "Free Reward, God Mode", url: "#", img: "https://dl.apkawards.com/moda/dl8/games/com.colossi.survival.gladiators/img/com.colossi.survival.gladiators.png", rating: 3.8, votes: 10 },
            { name: "Grand Hotel Mania", version: "4.17.10.7", mod: "Free Shopping", url: "#", img: "https://dl.apkawards.com/moda/dl24/games/com.deuscraft.TurboTeam/img/com.deuscraft.TurboTeam.png", rating: 4, votes: 1 },
            { name: "Good Coffee, Great Coffee", version: "1.14.2.2", mod: "Free Money", url: "#", img: "https://dl.apkawards.com/moda/dl2/games/com.tapblaze.coffeebusiness/img/com.tapblaze.coffeebusiness.png", rating: 3.31, votes: 13 }
        ],
        updateApps: [
            { name: "YouTube Premium Vanced", url: "#", img: "https://dl.apkawards.com/moda/dl8/games/com.google.android.youtube/img/com.google.android.youtube.png", rating: 3.21, votes: 19 },
            { name: "FaceApp Pro - Face Editor", url: "#", img: "https://dl.apkawards.com/moda/dl22/games/io.faceapp/img/io.faceapp.png", rating: 3.25, votes: 8 },
            { name: "MX Player Pro", url: "#", img: "https://dl.apkawards.com/moda/dl14/games/com.mxtech.videoplayer.pro/img/com.mxtech.videoplayer.pro.png", rating: 3.29, votes: 14 },
            { name: "ES File Explorer/Manager PRO", url: "#", img: "https://dl.apkawards.com/moda/dl10/games/com.estrongs.android.pop.pro/img/com.estrongs.android.pop.pro.png", rating: 3.33, votes: 60 },
            { name: "Citra - Nintendo 3DS Emulator", url: "#", img: "https://dl.apkawards.com/moda/dl27/games/org.citra.emu/img/org.citra.emu.png", rating: 3.9, votes: 10 },
            { name: "PickU Premium", url: "#", img: "https://dl.apkawards.com/moda/dl11/games/com.swifthawk.picku.free/img/com.swifthawk.picku.free.png", rating: 4, votes: 1 },
            { name: "Armor Inspector - for WoT", url: "#", img: "https://dl.apkawards.com/moda/dl21/games/com.dreamfarmgames.wot.armorinspector.android2/img/com.dreamfarmgames.wot.armorinspector.android2.png", rating: 3.78, votes: 9 },
            { name: "My Boy! - GBA Emulator", url: "#", img: "https://dl.apkawards.com/moda/dl12/games/com.fastemulator.gba/img/com.fastemulator.gba.png", rating: 3.44, votes: 18 }
        ],
        ongoingGames: [
            { name: "kaihi", version: "1.1.0", mod: null, url: "#", img: "https://dl.apkawards.com/moda/dl6/games/air.jp.globalgear.kaihi/img/air.jp.globalgear.kaihi.png", rating: 4, votes: 1 },
            { name: "Crash Drive 3", version: "1.0.8.5", mod: "Free Money", url: "#", img: "https://dl.apkawards.com/moda/dl15/games/nl.m2h.cd3/img/nl.m2h.cd3.png", rating: 4, votes: 1 },
            { name: "Subway Princess Runner", version: "8.5.0", mod: "Money", url: "#", img: "https://dl.apkawards.com/moda/dl22/games/com.rioo.runnersubway/img/com.rioo.runnersubway.png", rating: 3.58, votes: 19 },
            { name: "Stickman Great War", version: "0.5.6", mod: "Free Money", url: "#", img: "https://dl.apkawards.com/moda/dl21/games/mrtop.stickman.ninja.fight.battle.warriors/img/mrtop.stickman.ninja.fight.battle.warriors.png", rating: 4, votes: 4 },
            { name: "Kitaria Fables", version: "1.21b22", mod: "Unlocked Full", url: "#", img: "https://dl.apkawards.com/moda/dl5/games/com.crunchyroll.gv.kitariafables.game/img/com.crunchyroll.gv.kitariafables.game.png", rating: 4, votes: 2 },
            { name: "Adore", version: "1.0.0", mod: null, url: "#", img: "https://dl.apkawards.com/moda/dl45/games/com.cadabragames.adore/img/com.cadabragames.adore.png", rating: 4, votes: 1 },
            { name: "Elite Auto Brazil - Wheelie", version: "0.59", mod: "Money", url: "#", img: "https://dl.apkawards.com/moda/dl45/games/com.SoltyGames.EliteAutoBrasil/img/com.SoltyGames.EliteAutoBrasil.png", rating: 2.5, votes: 2 },
            { name: "Monoposto", version: "6.36", mod: "Unlocked", url: "#", img: "https://dl.apkawards.com/moda/dl8/games/com.gabama.monopostolite/img/com.gabama.monopostolite.png", rating: 3.31, votes: 16 }
        ],
        categories: [
            { name: "Action", url: "/action", img: "https://apkawards.com/img/navicon/01.png" },
            { name: "Arcade", url: "/arcade", img: "https://apkawards.com/img/navicon/03.png" },
            { name: "Educational", url: "/educational", img: "https://apkawards.com/img/navicon/07.png" },
            { name: "PSP", url: "/psp", img: "https://apkawards.com/img/navicon/15.png" },
            { name: "Puzzle", url: "/puzzle", img: "https://apkawards.com/img/navicon/08.png" },
            { name: "Racing", url: "/racing", img: "https://apkawards.com/img/navicon/09.png" },
            { name: "Role Playing", url: "/role-playing", img: "https://apkawards.com/img/navicon/10.png" },
            { name: "Simulation", url: "/simulation", img: "https://apkawards.com/img/navicon/11.png" },
            { name: "Sports", url: "/sports", img: "https://apkawards.com/img/navicon/12.png" },
            { name: "Strategy", url: "/strategy", img: "https://apkawards.com/img/navicon/13.png" }
        ],
        topicsGames: [
            { title: "Best Roguelike Android Games", url: "#", img: "https://apkawards.com/img/zt/Rogue2025.jpg" },
            { title: "Best Fighting Android Game", url: "#", img: "https://apkawards.com/img/zt/2020f.png" },
            { title: "Surreal weird puzzle solving Android game", url: "#", img: "https://apkawards.com/img/zt/rustylake.png" },
            { title: "Best Music Games", url: "#", img: "https://apkawards.com/img/zt/2020music.jpg" }
        ]
    };

    // Function to generate star rating HTML
    function getRatingStars(rating, votes) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<img src="https://apkaward.com/wp-content/plugins/wp-postratings/images/stars/rating_on.png" alt="star">';
            } else if (i === fullStars && halfStar) {
                stars += '<img src="https://apkaward.com/wp-content/plugins/wp-postratings/images/stars/rating_half.png" alt="half star">';
            } else {
                stars += '<img src="https://apkaward.com/wp-content/plugins/wp-postratings/images/stars/rating_off.png" alt="empty star">';
            }
        }
        return `<i class="cmr">${stars}</i>`;
    }

    // Function to render game cards (standard layout)
    function renderGameCards(containerId, games) {
        const container = $(`#${containerId}`);
        if (!container.length) return;
        
        let html = '';
        games.forEach(game => {
            html += `
                <article>
                    <div class="row apkbox">
                        <a href="${game.url}" class="pic" title="${game.name}">
                            <img src="${game.img}" alt="${game.name}" width="106" height="106">
                        </a>
                        <div class="apkinfo">
                            <strong>
                                <a href="${game.url}">${game.name}</a>
                                ${getRatingStars(game.rating, game.votes)}
                            </strong>
                        </div>
                    </div>
                </article>
            `;
        });
        container.html(html);
    }

    // Function to render game cards with version and mod
    function renderGameCardsWithMod(containerId, games) {
        const container = $(`#${containerId}`);
        if (!container.length) return;
        
        let html = '';
        games.forEach(game => {
            const modText = game.mod ? ` + Mod: ${game.mod}` : '';
            html += `
                <article>
                    <div class="row apkbox">
                        <a href="${game.url}" class="pic" title="${game.name}">
                            <img src="${game.img}" alt="${game.name}" width="106" height="106">
                        </a>
                        <div class="apkinfo">
                            <strong>
                                <a href="${game.url}">${game.name}</a>
                                <i class="emo cmz">${game.version}${modText}</i>
                                ${getRatingStars(game.rating, game.votes)}
                            </strong>
                        </div>
                    </div>
                </article>
            `;
        });
        container.html(html);
    }

    // Function to render categories
    function renderCategories(containerId, categories) {
        const container = $(`#${containerId}`);
        if (!container.length) return;
        
        let html = '';
        categories.forEach(cat => {
            html += `
                <li class="cat-item">
                    <a href="${cat.url}" title="${cat.name}">
                        <img src="${cat.img}" alt="${cat.name}" width="30" height="30">${cat.name}
                    </a>
                </li>
            `;
        });
        container.html(html);
    }

    // Function to render topics games
    function renderTopicsGames(containerId, topics) {
        const container = $(`#${containerId}`);
        if (!container.length) return;
        
        let html = '';
        topics.forEach(topic => {
            html += `
                <li>
                    <a href="${topic.url}">
                        <img src="${topic.img}" alt="${topic.title}" width="283" height="160">
                        <strong>${topic.title}</strong>
                    </a>
                </li>
            `;
        });
        container.html(html);
    }

    // Load all data
    renderGameCards('editors-choice-container', gamesData.editorsChoice);
    renderGameCards('top-new-games-container', gamesData.topNewGames);
    renderGameCards('popular-games-container', gamesData.popularGames);
    renderGameCardsWithMod('update-games-container', gamesData.updateGames);
    renderCategories('categories-container', gamesData.categories);
    renderTopicsGames('topics-games-container', gamesData.topicsGames);
    renderGameCards('update-apps-container', gamesData.updateApps);
    renderGameCardsWithMod('ongoing-games-container', gamesData.ongoingGames);

    // Mobile Navigation Toggle
    $(".nav_phone").click(function() {
        $(".nav_phone").toggleClass("nav_col");
        $(".nav_list").toggleClass("nav_block");
        $("html").toggleClass("navbody");
    });

    $(".mobile-nav").click(function() {
        $(".nav_phone").toggleClass("nav_col");
        $(".nav_list").toggleClass("nav_block");
        $("html").toggleClass("navbody");
    });

    // Search Toggle
    $(".nav_search").click(function() {
        $(".nav_search").toggleClass("nav_searchs");
        $(".search_form").toggleClass("nav_sblock");
    });

    // Search Form Submit
    document.getElementById('searchform').addEventListener('submit', function(e) {
        e.preventDefault();
        const keyword = document.getElementById('s').value.trim();
        if (keyword) {
            window.location.href = '/search#gsc.q=' + encodeURIComponent(keyword);
        }
    });

    document.getElementById('searchform1').addEventListener('submit', function(e) {
        e.preventDefault();
        const keyword = document.getElementById('s1').value.trim();
        if (keyword) {
            window.location.href = '/search#gsc.q=' + encodeURIComponent(keyword);
        }
    });

    // Go Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });

    $('#goTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    // Initialize scroll for topics sections
    if ($('.topics_boxsoll').length) {
        $('.topics_boxsoll').each(function() {
            // Simple horizontal scroll for mobile
            if ($(window).width() <= 800) {
                $(this).css({
                    'overflow-x': 'auto',
                    'white-space': 'nowrap'
                });
                $(this).find('ul').css({
                    'display': 'inline-block',
                    'white-space': 'nowrap'
                });
                $(this).find('li').css({
                    'display': 'inline-block',
                    'float': 'none',
                    'vertical-align': 'top'
                });
            }
        });
    }
});

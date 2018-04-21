const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
{
client.user.setGame('Widely -Server')
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
     
var prefix = "#";

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'عواصم')) {
	if(!message.channel.guild) return

const type = require('./fkk/3wasm.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة #نقاطي**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[message.author.id];
			userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
	if(!message.channel.guild) return

const type = require('./fkk/fkkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتجيب**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
لمعرفة نقطاك الرجاء كتابة #نقاطي**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[message.author.id];
			userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});



client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./l3b/3wasmPTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
   

    
        client.on('message', message => {
    if (message.content == "اعلام") {
        var x = ['الإمارات',
        'أفغانستان',
        'الأرجنتين',
        'ألبانيا',
        'أستراليا',
        'البحرين',
        'كندا',
        'الصين',
        'ألمانيا',
        'السعودية',
'السويد',
'تونس',
    'تركيا',
    "إنجلترا",
    "مصر",
    "إسبانيا",
    "فرنسا",
    "غانا",
    "اليونان",
    "العراق",
    "إيطاليا",
    "الأردن",
    "اليابان",
    "النيجر",
    "هولندا",
    "عمان",
    "بولندا",
    "فلسطين",
    "البرتغال",
    "تونس",
"اوزباكستان",
"سوريا",
"الأردن",
"لبنان",
"ويلز",
        ];
        var x2 = ['🇦🇪', 
        '🇦🇫',
        '🇦🇷',
        '🇦🇱',
        '🇦🇺',
        '🇧🇭',
        '🇨🇦',
        '🇨🇳',
        '🇩🇪',
        '🇸🇦',
'🇸🇪',
'🇹🇳',
    '🇹🇷',
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "🇪🇬",
    "🇪🇸",
    "🇫🇷",
    "🇬🇭",
    "🇬🇷",
    "🇮🇶",
    "🇮🇹",
    "🇯🇴",
    "🇯🇵",
    "🇳🇪",
    "🇳🇱",
    "🇴🇲",
    "🇵🇱",
    "🇵🇸",
    "🇵🇹",
    "🇹🇳",
    "🇺🇿",
    "🇸🇾",
    "🇯🇴",
    "🇱🇧",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    
    
    
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ماهو علم  **${x[x3]}** ؟
  لديك من الوقت 20 ثانيه للأجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})


        client.on('message', message => {
    if (message.content == "سؤال") {
        var x = ["ما هي لغة النمسا ؟",
        "أين توجد أطول سكة حديد في العالم ؟",
        "من هو اول شهيد في غزوه احد ؟",
        "ماأسم آخر سوره نزلت في مكه ؟",
        "ماهو النهر الوحيد في العالم ينبع من الجنوب إلى الشمال ؟",
        "من هي المراه التي تزوجها الرسول(ص) بأمر من الله ؟",
        "ما هي أكبر مدينة من المدن الأوروبية ؟",
        "سورة سمعها النجاشي ملك الحبشة فاضت لها دموعه فما هي ؟",
        "ما هي الدولة التي تتكون من عدة جزر تشبه شكل الهلال ؟",
        "ماهي أصغر دوله عربيه مساحه ؟",
        "ما هو الحيوان الذي يصاب بالحصبة كالإنسان ؟",
        "ما هو أول ما يقضي فيه بين الناس يوم القيامة ؟",
        "ماهو العنصر الذي لو وجد في الحليب لأصبح الحليب‎ ‎غذاء كامل ؟",
        "من الذي أسس المملكة العربية السعودية؟",
        "في أي معركة كان الرسول صلى الله عليه وسلم أول من رمى بالمنجنيق؟",
        "ماهي أكبر دوله عربيه مساحه ؟",
        "في أي قارة تقع دولة فلسطين؟",
        "كم دولة عربية عملتها الريال؟",
        "ما هي اللغة الرسمية للبرازيل؟",
];
        var x2 = ["الألمانية",
        "كندا",
        "عبد الله بن عمرو",
        "الروم",
        "النيل",
                "زينب بنت جحش",
                "لندن",
        "سورة مريم",
        "جزر القمر",
        "الكويت",
        "القرد",
        "الدماء",
        "الحديد",
        "عبدالعزيز بن سعود",
        "الطائف",
        "السودان",
        "اسيا",
        "4",
        "البرتغالية",

        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  **${x[x3]}** 
    لديك 20 ثانية للأجابة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "لغز") {
        var x = ["ماهو الشيء الذي يكتب و لا يقرأ ؟",
        "ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟",
        "ماهو الشيء الذي كلما زاد نقص ؟",
        "ما هو الشيء الذي لا يمشي إلا بالضرب ؟",
        "ما هو الشيء الذي إذا أخذنا منه إزداد وكبر ؟ ",
        "له أسنان ولا يعض، ما هو ؟",
        "يتحرك دائماً حواليك لكنك لاتراه فما هو ؟ ",
        "ما هو البيت الذي ليس فيه ابواب ولا نوافذ ؟",
        "ما هو الشيء الذي إذا غليته جمد ؟",
        "ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟",
        "ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟",
        "ما هو الشيء الذي اسمه على لونه ؟",
        "له أوراق وما هو بنبات، له جلد وما هو بحيوان، وعلم وما هو بإنسان. من هو ؟",
        "ما هو الشيء الذي يقرصك ولا تراه ؟",
        "ما هو الشيء الذى ليس له بداية ولا نهاية ؟",
        "ما هو الشّيء الذي يستطيع المشي بدون أرجل والبكاء بدون أعين؟",
        " ما هو الشّيء الذي يتكلّم بدون لسان ويسمع بدون أذن؟",
        " ما هو الشّيء الذي يتبع الكلب أينما حلّ وآرتحل؟",

];
        var x2 = ["القلم",
        "الشاي",
        "العمر",
        "المسمار",
        "الحفرة",
        "المشط",
        "الهواء",
        "بيت الشعر",
        "البيض",
        "البحر",
        "الساعة",
        "البيضه",
        "الكتاب",
        "الجوع",
        "الدائرة",
        "السحاب",
        "الهاتف",
        "ذيله",
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  **${x[x3]}** 
    لديك 20 ثانية للأجابة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})


client.on('message', message => {
    var prefix = "#";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 434054716029403176) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/Fabulous");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });

client.login(process.env.BOT_TOKEN);

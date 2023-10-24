const videoList=[
    {
        title: 'Making A Dog Birthday Cake',
        videoId: 'KHCfr7qvkJs?si=mJyT5FYJiZbnoCSZ',
    },
    {
        title: 'Bunny Eating Things Politely',
        videoId: 'SDoUH4pmZkw?si=c3UTA6FyCPM_D1u5',
    },
    {
        title: 'Tie-Dying My Clothes With Bleach',
        videoId: '7L7K9YYFn8E?si=98lrhqHpbu6VX1Ma',
    },
    {
        title: 'Tiny Face Makeup',
        videoId: 'jWAWc9_21J0?si=U1WBarU-8HWgXbeC',
    },
    {
        title: 'My Progress in Mens Haircuts',
        videoId: '0uFDfQu7D5k?si=yc_RZS3oPtDCrdw-',
    },
    {
        title: 'We Made A Hand Mold',
        videoId: 'pTzk2ZVqi3w?si=Ej6pYughVD2WMkhg',
    },
    {
        title: 'Trimming My Own Hair',
        videoId: 'nqGrAloUFPE?si=FCDr4-VwQPuQKEBo',
    },
    {
        title: 'Bunnys One Year Update',
        videoId: '_VP8ftQXAQE?si=n5DaEVuJ00SjJahD',
    },
    {
        title: 'A Tour Of My House In The Elder Scrolls Online',
        videoId: 'mqyiJtbCoUE?si=sw1-pd_EoGUc46Ix',
    },
    {
        title: 'Get Ready With Me To Go Nowhere',
        videoId: 'TNuurt3mpr8?si=AjJuIuGGahKPtl0K',
    },
    {
        title: 'My Dogs Enjoying Blankets (and Other Warm Things)',
        videoId: 'CAJFYbKm81M?si=G9RdkfqwWGOlEeJX',
    },
    {
        title: 'Trying To Blow Bubbles With My Hair',
        videoId: 'QFI7OI7MX4Y?si=zXtGScfQGuFIGYn9',
    },
    {
        title: 'Bunnys 4th Birthday',
        videoId: 'MIZyoTRNAG8?si=_e2bAS6-dNvBmJDR',
    },
    {
        title: 'Painting Denim Jackets',
        videoId: 'thsBniaLY-8?si=lSl-nXjSbY8StzUg',
    },
    {
        title: 'Dog Kissing Booth',
        videoId: 'qJuElc3mEyw?si=_R79LibfAztKH3p7',
    },
    {
        title: 'I Made That Awful Soap Hand',
        videoId: 'Fo3HwJNgi9M?si=cU-xYNp4ZLXOiket',
    },
    {
        title: 'Making Clip In Bangs *Work* For Me',
        videoId: '7RoV0KaJoLc?si=7pkfLhBVsGKAxyr4',
    },
    {
        title: 'Can Marbles Stand On His Hind Legs?',
        videoId: 'Bs1jHoDh5WY?si=sUfWzm7YhcO5OWBe',
    },
    {
        title: 'Giving Myself An E-Girl Makeover',
        videoId: 'CYowCBOR2SI?si=EoskG3Lqs7NHg_QG',
    }, 
    {
        title: 'Bunnys First Bath',
        videoId: 'M_2vWZKcxOI?si=v98-69pcAqTSKsw_',
    }, 
    {
        title: 'Making More Soup',
        videoId: 'tGCyIxMYXrk?si=Y64pVg6ObP1hhvbi',
    }, 
    {
        title: 'Making An Advent Calendar For My Dogs',
        videoId: 'KjMK0YY93Os?si=0jY-N_cIQTCX6yjf',
    }, 
    {
        title: 'MyMomIsHere.mov',
        videoId: 'VCw8T9kNNnI?si=kiOHrFaZt9YX4kj7',
    }, 
    {
        title: 'Giving Myself A Tape Face Lift',
        videoId: 'VGjDZwdqjjE?si=DTTUsFbAxT17nqOU',
    }, 
    {
        title: 'Hydro Dipping Crocs Again With A Small Amount Of Redemption But Not Really',
        videoId: '6UxluH5NzVY?si=6hHSjerH9-s6B1vv',
    }, 
    {
        title: 'Im Dog Stairs For Halloween',
        videoId: 'jJXy3Aya8H4?si=t4QFtrcf6ZU_9Ueo',
    }, 
    {
        title: 'My Dogs Try On Halloween Costumes 3',
        videoId: 'SKbGs4eKFw8?si=hK91oB1yuWiR-wo0',
    }, 
    {
        title: 'I Turned My Hair Into A Hot Wheels Track',
        videoId: 'o-cq5uR9gEk?si=6ir5Jb1x6_RoFkx5',
    }, 
    {
        title:'Taking A Nap For 20 Million Subscribers', 
        videoId: '_zz8tyRHKZY?si=OdXDXDhjI4Qo9aT5',
    }, 
    {
        title: 'I Made A Train For My Dogs',
        videoId: 'CZAgIPqD_D0?si=l3ccjFTFnwYKlvyK',
    }, 
    {
        title: 'Giving My Boyfriend A Pin Up Girl Makeover',
        videoId: 'BNgmYFwUjjw?si=cVJdUSmzTJFtiPoq',
    }, 
    {
        title: 'I Made Two Videos And They Were Both Bad',
        videoId: '-1is7e6ErkU?si=WSPRDVc5k8zH3rPy',
    }, 
    {
        title: 'My Boyfriend Makes Me Ice Cream For My Birthday',
        videoId: 'd1vXEDJ3PK0?si=Z9T546OfudytR8_K',
    }, 
    {
        title: 'Trying To Make My Own Wig',
        videoId: 'faDDENDHyF8?si=fg243uns6mtJ2nCI',
    }, 
    {
        title: 'My Dogs Eat Pupsicles',
        videoId: '6exhT930Ag4?si=lWSv1d0Phgkgdlbw',
    }
                                                                                                           
];
function displayRandomVideo(){
    console.log("displayRandomVideo wird aufgerufen")
    const randomIndex=Math.floor(Math.random()*videoList.length);
    const randomVideo=videoList[randomIndex];
    const videoContainer=document.getElementById('video-container');
    const currentDate= new Date();
 console.log(videoContainer)  
 
    localStorage.setItem('lastVideoUpdate', currentDate);
    videoContainer.innerHTML=`
    <h2>${randomVideo.title}</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${randomVideo.videoId}" frameborder="0" allowfullscreen></iframe>
    `;
}

function displayNewVideo(){
    displayRandomVideo();
}

function getLastVideoUpdate() {
    const lastUpdate = localStorage.getItem('lastVideoUpdate'); 
    if (lastUpdate) {
        return new Date(lastUpdate);
    }
    return null;
}

function dailyUpdate(){
    displayRandomVideo();

    const currentTime= new Date();
    const lastUpdateDate=getLastVideoUpdate();

    if (lastUpdateDate){
        const timeSinceLastUpdate = currentTime - lastUpdateDate;
        const oneDayInMilliseconds=24*60*60*1000;
        const timeUntilNextUpdate = oneDayInMilliseconds-timeSinceLastUpdate;
        setTimeout(dailyUpdate,timeUntilNextUpdate);
    }
    else{
        dailyUpdate();
    }
}
const newVideoButton=document.getElementById('new-video-button');

newVideoButton.addEventListener('click',displayNewVideo);

document.addEventListener("DOMContentLoaded", function() {
    dailyUpdate();
  });
class Article{

    constructor(Title, Brief){

        this.Title = Title,
        this.Brief = Brief
    }
}

const Articles = [

            new Article("My Opinion on Wrestling", "How good is wrestling today? Is the wrestling business successful in the past few years? How good is the weekly product made by companies like WWE, AEW etc."),
    
            new Article("Underrated Forms of Entertainment", "Many people know about all-time comedy classic shows like Friends, Fresh Prince of Bel-air, and Drake & Josh. Other Genres like horror, drama, and romance have their popular shows, but what about the lesser famous genres like thriller, Anime, Stop Motion"),
    
            new Article("Japanese Culture", "Learn about everything related to Japanese culture, like the food, temples, traditions, and people"),
    
           
        ]
    
    
document.getElementById("Article").innerHTML = Articles[0].Title + '<br/>' + Articles[0].Brief
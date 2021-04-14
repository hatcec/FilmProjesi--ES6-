//local storage a ekleme
class Storage{
    static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();//arraya sahip olduk
       films.push(newFilm);//arraylara obje atıyoruz
       localStorage.setItem("films",JSON.stringify(films));//stringe çevirdi
    }
    static getFilmsFromStorage(){
        let films;
        if( localStorage.getItem("films")===null){
            films=[];
        }else{
          films= JSON.parse (localStorage.getItem("films"));//sadece local string değer olarak alıyor ve orjinal arraya çevirmek gerekiyotr
        }
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films=this.getFilmsFromStorage();
        films.forEach(function(film,index){
            if(filmTitle===film.title){
                films.splice(index,1);           
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
}

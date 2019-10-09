export class  Book{
    id:number;
    title:string;
    author:string;
    price:string;
    description:string;
    img:string;

    constructor (title,author,price,img,description)
    {
        this.title=title;
        this.author=author;
        this.price=price;
        this.description=description;
        this.img=img;
    }

}
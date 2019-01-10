
export class User {
constructor(public id?:number, public name?:string,
    public userName?:string, public email?:string,public address?:Address,
    public phone?:string, public webSite?:string, public company?:Company, public isComplete?:boolean){
        this.address=new Address();
    }


}

export class Company{
constructor(public name?:string, public catchPhrase?:string , public bs? :string ){}
}

export class Geo{
    constructor(public lat?:number, lng?:number){}
}
export class Address{
    constructor(public street? :string, public suite?:string,public city?:string,
        public zipcode?:string , public geo?:Geo ){}
}
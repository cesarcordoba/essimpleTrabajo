
export class Video {
    id: number;
	url: string;
	tipo: string;
	key: string;
	private _play: boolean = false;

	constructor(arg) {
		this.id = arg.id;
		this.url = arg.url;
		this.tipo = arg.tipo
		this.key = arg.key;
	}


	get play(){
		return this.play;
	}

	set play(value: boolean){
		this._play = value;
	}

}

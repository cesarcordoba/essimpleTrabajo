
export interface App {
	port: number;
}

export interface DB {
	host: string,
	port: number,
	database: string,
	username: string,
	password: string,
	dialec: string

}

export interface Keys {
	facebook: {
		clientID: string,
		clientSecret: string,
		callbackURL: string
	},
	google: {
		clientID: string,
		clientSecret: string,
		callbackURL: string
	},
	twitter: {
		consumerKey: string,
		consumerSecret: string,
		callbackURL: string
	},
	instagram: {
		clientID: string,
		clientSecret: string,
		callbackURL: string
	},
}

export interface Host {
	base: string;
	subdomains: string[]
}

export interface AWSKEYS {
	accessKeyId: string,
	secretAccessKey: string,
	region: string
}

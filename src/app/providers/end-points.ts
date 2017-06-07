export class EndPoints {

    private readonly ACCESS_TOKEN: string = '87440f9d56702340edee57ee1e33a698a26b8ef8925803040368f3ca52e3ed81';
    private readonly URL: string = 'https://api.dribbble.com/v1/';
    
    private readonly SHOTS = 'shots';


    private getAccessToken(): string {
        return `?access_token=${this.ACCESS_TOKEN}`;
    }

   
    // CHAMADAS USADAS NO SERVICE

    protected getURLShots(): string {
        return `${this.URL}shots${this.getAccessToken()}`;
    }

    protected getShortDetail(idShort: string) {
        return `${this.URL}shots/${idShort}${this.getAccessToken()}`;
    }

    protected getProfileUser(id: string): string {
        return `${this.URL}users/${id}${this.getAccessToken()}`;

    }

    protected getShotsUser(id: string): string {
        return `${this.URL}users/${id}/shots${this.getAccessToken()}`;
    }

    protected getShotsComents(idComents: string): string {
        return `${this.URL}shots/${idComents}/comments${this.getAccessToken()}`;
    }

    protected getShotsLikes(idComents: string): string {
        return `${this.URL}shots/${idComents}/likes${this.getAccessToken()}`;
    }

}

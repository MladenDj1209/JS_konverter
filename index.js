let eur;
let usd;
let chf;
let htk;

const konvertor = function(bam) {
	 eur = bam/1.95;
	 usd = bam*0.61;
	 chf = bam*0.6;
	 hrk = bam*3.84;
	return {
		eur, usd, chf, hrk
	}
}

konvertor(15);
console.log('Iznos u EUR je: ' +eur);
console.log('Iznos u USD je: ' +usd);
console.log('Iznos u CHF je: ' +chf);
console.log('Iznos u HRK je: ' +hrk);
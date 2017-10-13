let eur;
let usd;
let chf;

const konvertor = function(bam) {
	 eur = bam/1.95;
	 usd = bam*0.61;
	 chf = bam*0.6;
	return {
		eur, usd, chf
	}
}

konvertor(15);
console.log('Iznos u EUR je: ' +eur);
console.log('Iznos u USD je: ' +usd);
console.log('Iznos u CHF je: ' +chf);
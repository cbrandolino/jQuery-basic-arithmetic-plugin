(function($) {

    var Operation = function() {

        this.operands = arguments;

        if (this.operands.length < 2)
            throw new Error('You need at least two arguments.');

        for (var i = 0; i < this.operands.length; i++) {
            if (isNaN(parseFloat(this.operands[i])))
                throw new Error('All arguments must be numeric.');
            if (i == 0) 
                this.result = this.operands[i];
            else
                this.operate(i);
        }
    }

    $.add = function() {

        this.operate = function(i) {
            this.result = this.result + this.operands[i];
        }

        Operation.apply(this, arguments);
        return this.result;

    }


    $.subtract = function() {

        this.operate = function(i) {
            this.result = this.result - this.operands[i];
        }

        Operation.apply(this, arguments);
        return this.result;

    }

    $.divide = function() {

        this.operate = function(i) {
            if (this.operands[i] == 0)
                throw new Error('Ph\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn')
            this.result = this.result / this.operands[i];
        }

        Operation.apply(this, arguments);
        return this.result;

    }



    $.multiply = function() {

        this.operate = function(i) {
            this.result = this.result * this.operands[i];
        }

        Operation.apply(this, arguments);
        return this.result;

    }
    	
    
	$.equals = function() {
	
		this.operate = function(i) {
		    if (i == 1 && this.operands[0] == 0) {
			    this.result = (this.operands[0] == this.operands[i]);
			} else {
			    this.result = (this.result && (this.operands[i-1] === this.operands[i]));
		    }
		}
		
		Operation.apply(this, arguments);
        return this.result;
	}

}(jQuery));
# Contenu principal

```css
@media print{
  @page {
    size: 16cm 21cm;
    margin-top: 1cm;
    margin-bottom: 2cm;
    bleed: 6mm;
    marks: crop;
    @bottom-center {
      content: string(title);
      text-transform:uppercase;
      font-size:12pt;
      color:black;
      font-family: 'Hershey-Noailles-Duplex-Regular';
    }
  }

  @page:left {
    margin-left: 1.5cm;
    margin-right: 3cm;
    @left-middle{
    content: counter(page, decimal-leading-zero);
    font-size:10pt;
    color:black;
      font-family: 'Hershey-Noailles-Duplex-Regular';
    }
  }

  @page:right {
    margin-left: 3cm;
    margin-right: 1.5cm;
    @right-middle {
    content: counter(page, decimal-leading-zero);
    font-size:10pt;
    color:black;
    font-family: 'Hershey-Noailles-Duplex-Regular';
    }
  }

  @page:blank{
      @bottom-left { content: none; }
      @bottom-right {
      content: none;
      }
      @bottom-center {
      content: none;
      }
  }

  @page:nth(1) { 
    @bottom-center { content: none; } 
    @right-middle{ content: none; }
    @left-middle{ content: none; }
    margin: 0;
  }
  
  @page:nth(2) { 
    @left-middle{ content: none; }
  }

  @page:nth(3) { 
    @bottom-center { content: none; } 
    @right-middle{ content: none; }
  }

  @page:nth(4) { 
    @bottom-center { content: "Le Web to Print"; }
    @left-middle{ content: none; }
  }

  @page:nth(5) { 
    @bottom-center { content: "Le Web to Print"; }
    @right-middle{ content: none; }
  }
  
  @page:nth(6) { 
    @left-middle{ content: none; }
  }

  @page:nth(7) { 
    @bottom-center { content: "Sommaire"; }
    @right-middle{ content: none; }
  }
  
  @page:nth(8) { 
    @bottom-center { content: none; } 
    @left-middle{ content: none; }
  }


  @page:nth(30) { @left-middle {content: none;}}
  
  @page:nth(31) {
    @top-left { content: none; }
    @bottom-center { content: "Imprimer cette édition"; }
  }
  
  @page:nth(32) {
    @bottom-center { content: "Méthodologie";}
  }

  @page:nth(33) {
    @bottom-center { content: "Méthodologie"; }
  }

  @page:nth(34) { 
    @left-middle {content: none; }
    @bottom-center { content: "Colophon"; }
  }

/* COUVERTURE ---------------------*/ 
/* ----------------------------------*/


.cover{
  font-family: monospace;
  text-justify: auto;
  font-size: 9pt;
  position:absolute;
  bottom:0;
  width: 33.4%;
  right:0;
  page-break-after: right;
  font-family: 'Hershey-Noailles-Duplex-Regular';

}

/* INTRODUCTION ---------------------*/ 
/* ----------------------------------*/



.introduction p{
  font-family: 'Hershey-Noailles-Duplex-Regular';
}

.introduction .explication-credit{
  font-size:11pt;
  line-height:10pt;  
  font-style:normal;
  font-family: 'Hershey-Noailles-Duplex-Regular';
  margin:0.5cm 0 1cm 0;
}

em{
  font-style:normal;
}


.introduction .ours{
  page-break-after: left;
  text-align:right;
  margin-top:8.6cm;
  font-size:11pt;
  line-height:10pt;
  position: absolute;
  right:0;

}

.introduction .explication{
  margin:0;
  font-size:16pt;
  line-height:15pt !important;

}

.introduction .last-explication{
  page-break-after: right;
}

.introduction .interlude{
  position:absolute;
  font-family: 'Hershey-Noailles-Duplex-Regular';
  top:calc(50% - 0.4cm);
  transform: translate(0, -50%);
  width:85%;
  font-size:11pt;
  line-height:10pt;
  color:#618cc9;
}


/* Sommaire --------*/

.introduction .sommaire{
  font-size:16pt;
  line-height:15pt;
  font-family: 'Hershey-Noailles-Duplex-Regular';
  text-transform:uppercase;
  page-break-after:right;
  margin:0;
  padding:0;
  top:0;
  margin-top:-0.5cm;

}

.link{
  padding-bottom:10px;
}

.link::before {
  content: target-text(attr(href url)) ;
}

.link::after {
  content: target-counter(attr(href url), page, decimal-leading-zero);
  padding-right:50px;
  font-weight:bolder;
  position:absolute;
  right:0;
  padding:0;
  text-align:right;
}

.introduction a {
  text-decoration:none;
  color:inherit;
}

a::after {
  content: " (" attr(href) ")";
}

/* PAGES IMAGES ---------------------*/
/* ----------------------------------*/

.contenu-principal{
  break-before: left;
}

.titre-chapitre{
  position: absolute;
  top:-1cm;
  color:transparent;
  string-set: title content(text);
}
    
.gradient-container {
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  width:100%;
  height:18cm;
  min-height:100%;
}
.container-1 figure{ background-color:#618cc9; }
.container-2 figure{ background-color:#5e8cc1; }
.container-3 figure{ background-color:#5d8dbf; }
.container-4 figure{ background-color:#5a8db8; }
.container-5 figure{ background-color:#5b8db5; }
.container-6 figure{ background-color:#578caa; }
.container-7 figure{ background-color:#548da8; }
.container-8 figure{ background-color:#518c97; }
.container-9 figure{ background-color:#4f8b94; }
.container-10 figure{ background-color:#4f8a8a; }
.container-11 figure{ background-color:#4b8b88; }
.container-12 figure{ background-color:#488a7f; }
.container-13 figure{ background-color:#48897b; }
.container-14 figure{ background-color:#46896f; }
.container-15 figure{ background-color:#43886b; }
.container-16 figure{ background-color:#438861; }
.container-17 figure{ background-color:#3f885e; }
.container-18 figure{ background-color:#3d864e; }
.container-19 figure{ background-color:#38874b; }
.container-20 figure{ background-color:#358639; }


.gradient-container figure {
  width:3.6cm;
  height:1.8cm;
  margin:0;
  padding:0;
  overflow: hidden;
}

.gradient-container figure img{
  width:100%;
  height:100%;
  mix-blend-mode: multiply;
  object-fit: cover;
}

.espace-fine-avant:before{
  content: "\00a0\00a0";
  font-size:3pt;
  color:black;
}

.espace-fine-apres:after{
  content: "\00a0\00a0";
  font-size:3pt;
  color:black;
}


/* CONCLUSION -----------------------*/
/* ----------------------------------*/
  
.conclusion{
  color:black;
  page-break-before: right;
}

.conclusion p, .conclusion ol{
  font-size:12pt;
  font-family: 'Hershey-Noailles-Duplex-Regular';
  line-height: 10pt;
}

.conclusion .print-yourself{
  page-break-after: always;
  margin:0;
  padding:0;
  position: absolute;
  bottom:0;
}

.conclusion .print-yourself li{
  margin-left:1cm;
}

.conclusion .methodologie{
  margin:0;
}

.conclusion  .last-methodologie{
  page-break-after: always;
}

.conclusion code{
  font-size:9pt;
  line-height:2pt!important;
}

.conclusion .colophon{
  margin:0;
  position: absolute;
  bottom:0;
  font-family: 'Hershey-Noailles-Duplex-Regular';
}


}
```

# Intercalaires

```css
@media print{
  @page {
    size: 12.5cm 21cm;
    margin-top: 1cm;
    margin-bottom: 2cm;
    bleed: 6mm;
    marks: crop;
  }
  
    @page:left {
    margin-left: 1cm;
    margin-right: 3cm;
    }
      @page:right {
    margin-left: 3cm;
    margin-right: 1cm;
    }

  @page:blank{
      @top-left {
      content:none;
      }
      @bottom-left {
      content: none;
      }
      @bottom-right {
      content: none;
      }
      @bottom-center {
      content: none;
      }
  }
  

@page:nth(1) { color:#618ec7; dt{ background-color:#618ec7; }}
@page:nth(2) { color:#618ec5; dt{ background-color:#618ec5; }}
@page:nth(3) { color:#5e8dbc; dt{ background-color:#5e8dbc; }}
@page:nth(4) { color:#5b8cba; dt{ background-color:#5b8cba; }}
@page:nth(5) { color:#5b8cb1; dt{ background-color:#5b8cb1; }}
@page:nth(6) { color:#578dad; dt{ background-color:#578dad; }}
@page:nth(7) { color:#548da5; dt{ background-color:#548da5; }}
@page:nth(8) { color:#548ca1; dt{ background-color:#548ca1; }}
@page:nth(9) { color:#518b9e; dt{ background-color:#518b9e; }}
@page:nth(10) { color:#4e8c92; dt{ background-color:#4e8c92; }}
@page:nth(11) { color:#4e8a8d; dt{ background-color:#4e8a8d; }}
@page:nth(12) { color:#4c8a85; dt{ background-color:#4c8a85; }}
@page:nth(13) { color:#4c8a82; dt{ background-color:#4c8a82; }}
@page:nth(14) { color:#4c8a82; dt{ background-color:#4c8a82; }}
@page:nth(15) { color:#498978; dt{ background-color:#498978; }}
@page:nth(16) { color:#458975; dt{ background-color:#458975; }}
@page:nth(17) { color:#458972; dt{ background-color:#458972; }}
@page:nth(18) { color:#458972; dt{ background-color:#458972; }}
@page:nth(19) { color:#428868; dt{ background-color:#428868; }}
@page:nth(20) { color:#438865; dt{ background-color:#438865; }}
@page:nth(21) { color:#40885b; dt{ background-color:#40885b; }}
@page:nth(22) { color:#408758; dt{ background-color:#408758; }}
@page:nth(23) { color:#3c8754; dt{ background-color:#3c8754; }}
@page:nth(24) { color:#3c8751; dt{ background-color:#3c8751; }}
@page:nth(25) { color:#398748; dt{ background-color:#398748; }}
@page:nth(26) { color:#398645; dt{ background-color:#398645; }}
@page:nth(27) { color:#348642; dt{ background-color:#348642; }}
@page:nth(28) { color:#35863f; dt{ background-color:#35863f; }}
@page:nth(29) { color:#35863c; dt{ background-color:#35863c; }}
@page:nth(30) { color:#35863c; dt{ background-color:#35863c; }}


body{
  margin:0;
  padding:0;
  font-family: 'Hershey-Noailles-Duplex-Regular';
}

a{
  color:inherit;
}


h1{
    writing-mode: sideways-lr;
    -webkit-writing-mode: sideways-lr;
    -ms-writing-mode: sideways-lr;
    text-align: right;
    position: absolute;
    top: 0px;
    right: -15px;
    height: 65vh;
    text-transform: uppercase;
    font-size: 32px;
    font-family: 'Euripides-SemiBold';
}


.text-introductif{
  width:75%;
  position:absolute;
  top:5.37cm;
  font-size: 11pt;
  line-height: 10pt;
}

dl{
  position:absolute;
  bottom:-0.5cm;
  right:0;
  text-align:right;
  font-size: 10pt;
}

dt{
  padding : 1px;
  text-transform:uppercase;
  color:white;
  background-color : black;
}

dd{
  padding:0;
  margin:0;
}

.retranscription{
  page-break-before:left;
  page-break-after:right;
  margin:0;
  font-size: 11pt;
  line-height: 10pt !important;
}


em{
  font-family: 'Hershey-Noailles-Duplex-Regular';
  font-style:normal;
  font-size: 9pt;
  margin:0;
  padding:0;
}


.retranscription span{
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: inherit;
}

}

```
# Couverture

```css
@media print {
  @page {
    size: 16cm 21cm;
    bleed: 6mm;
    marks: crop;
    margin:0;
    margin-bottom:0;
  }

.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: monospace;
  text-justify: auto;
  font-size: 8pt;
  margin-top:0.1cm;
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('motif-cover.jpg'); 
    background-size: cover;
    -webkit-mask-image: url('motif-cover.jpg'); 
    mask-image: url('motif-cover.jpg'); 
}

.columns {
  height: 100%;
  width: 35%;
  font-family: monospace;
  text-justify: auto;
  font-size: 7pt;
}

.columns em {
  font-style: normal;
  position:absolute;
  bottom:0.25cm;
  font-family: 'Hershey-Noailles-Duplex-Regular';
  font-size:9pt;
    color: black;
    -webkit-text-fill-color: black;

}

.back{
  text-align:center;
  break-before: always;
  font-size:20pt;
  display:flex;
  align-items: center;
  justify-content: center;
  height:100%;
  position: absolute;
  left:25%;
  width:50%;
  top:-50%;
  font-family: 'Hershey-Noailles-Duplex-Regular';
}  
    

}
```


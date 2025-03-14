# Understanding TEI

The [Text Encoding Initiative](https://tei-c.org/release/doc/tei-p5-doc/en/html/ST.html) is a collaborative effort to represent documents from the Humanities in a common digital format. It allows for a great amount of specificity in defining attributes of a text. All TEI files are encoded in XML (Xtensible Markup Language), very similar to the HTML that underlies all web pages. It allows for nesting data to an arbitary extent, and all data is contained within tags, as can be seen in [this example](https://www.teibyexample.org/exist/examples/TBED02v00.htm?target=erasmus#erasmus):

```xml
<teiHeader xmlns="http://www.tei-c.org/ns/1.0">
	<fileDesc>
		<titleStmt>
			<title>Colloquia familiaria</title>
			<author>Desiderius Erasmus</author>
			<respStmt>
				<resp>Encoded by</resp>
				<name xml:id="JN">Jennifer K. Nelson</name>
				<name xml:id="GE">Gretche Ermer</name>
			</respStmt>
			<principal>A. Ross Scaife</principal>
			<sponsor>Cultural Heritage Language Technologies</sponsor>
			<funder>N​SF-EU</funder>
		</titleStmt>
		<publicationStmt>
			<publisher>Stoa Consortium</publisher>
			<pubPlace>Lexington, KY</pubPlace>
			<address>
				<addrLine>Department of Modern and Classical Languages, Literatures and Cultures</addrLine>
				<addrLine>1055 Patterson Office Tower</addrLine>
				<addrLine>University of Kentucky</addrLine>
				<addrLine>Lexington, KY 40506​-0027</addrLine>
				<addrLine>url​:http​://www​.stoa​.org</addrLine>
			</address>
			<date>2002​-09​-05</date>
		</publicationStmt>
		<sourceDesc>
			<biblStruct>
				<monogr>
					<author>Erasmus, Desiderius, d. 1536</author>
					<title type="main">Desiderii Erasmi Roterodami colloquia familiaria</title>
					<title type="subordinate">ad optimarum editionum fidem diligenter emendata, cum succincta difficiliorum explanatione</title>
					<edition>Ed. stereotypa</edition>
					<imprint>
						<pubPlace>Lipsiae</pubPlace>
						<publisher>sumptibus Ottonis Holtze</publisher>
						<date>1867​-1872</date>
					</imprint>
					<extent>771 p. (2 vols) ; 15 cm.</extent>
				</monogr>
			</biblStruct>
		</sourceDesc>
	</fileDesc>
	<encodingDesc>
		<samplingDecl>
			<p>Editorial notes in the Holtze edition have not been reproduced</p>
		</samplingDecl>
		<editorialDecl>
			<normalization method="silent">
				<p>Original punctuation conventions in the Holtze edition have been retained as much as possible</p>
			</normalization>
			<hyphenation eol="none">
				<p>Hyphenated words that appear at the end of the line in the Holtze edition have been reformed</p>
			</hyphenation>
			<interpretation>
				<p>Italics are recorded without interpretation</p>
			</interpretation>
		</editorialDecl>
		<refsDecl>
			<refState unit="colloquium"/>
			<refState unit="topic"/>
		</refsDecl>
		<classDecl>
			<taxonomy xml:id="lcsh">
				<bibl>Library of Congress Subject Headings</bibl>
			</taxonomy>
			<taxonomy xml:id="lc">
				<bibl>Library of Congress Classification</bibl>
			</taxonomy>
		</classDecl>
	</encodingDesc>
	<profileDesc>
		<langUsage>
			<language ident="la">Latin</language>
			<language ident="grc">Ancient Greek</language>
		</langUsage>
		<textClass>
			<keywords scheme="#lcsh">
				<list>
					<item>Dialogues, Latin (Medieval and modern)</item>
					<item>Folly -- Early works to 1800</item>
				</list>
			</keywords>
			<classCode scheme="#lc">P​A8501</classCode>
		</textClass>
	</profileDesc>
	<revisionDesc>
		<change when="2004​-03​-01" who="#GE">[ed] added text of "De utilitate colloquiorum ad lectorem"</change>
		<change when="2003​-10​-14" who="#JN">[ed] expanded T​EI header to include more information, e​.g. LC subject headings and LC classification</change>
		<change when="2002​-09​-01" who="#JN">[markup]: began tei​-compliant markup</change>
	</revisionDesc>
</teiHeader>
```

This will seem like a lot to non technical people, but if you are one, read closely. You can identify the Title and Author, and see those attributes are wrapped in tags of increasing specificity. Title and Author are wrapped in the Title-Statement, which is within the File-Description, which is within the TEI-Header. Next to them are the Responsibility-Statement, the Principal-Researcher, the Sponsor, and the Funder. Next to the Title-Statement is the Publication-Statement, which contains information nested in a similar structure. All tags describe either a specific data point, or an abstraction or group of data points.

TEI operates by segmenting information into modules, which are as follows, taken from the [documentation](https://tei-c.org/release/doc/tei-p5-doc/en/html/ST.html):


|Module name 	|Where defined 										|Formal public identifier|
|tei 			|1 The TEI Infrastructure 							|TEI Infrastructure|
|header 		|2 The TEI Header 									|Common Metadata|
|core 			|3 Elements Available in All TEI Documents 			|Common Core|
|textstructure 	|4 Default Text Structure 							|Default Text Structure|
|gaiji 			|5 Characters, Glyphs, and Writing Modes 			|Character and Glyph Documentation|
|verse 			|6 Verse 											|Verse|
|drama 			|7 Performance Texts 								|Performance Texts|
|spoken 		|8 Transcriptions of Speech 						|Transcribed Speech|
|cmc 			|9 Computer-mediated Communication 					|TEI-CMC|
|dictionaries 	|10 Dictionaries 									|Dictionaries|
|msdescription 	|11 Manuscript Description 							|Manuscript Description|
|transcr 		|12 Representation of Primary Sources 				|Transcription of Primary Sources|
|textcrit 		|13 Critical Apparatus 								|Text Criticism|
|namesdates 	|14 Names, Dates, People, and Places 				|Names, dates, persons and places|
|figures 		|15 Tables, Formulæ, Graphics, and Notated Music 	|Tables, Formulæ, Notated Music, Figures|
|corpus 		|16 Language Corpora 								|Metadata for Language Corpora|
|linking 		|17 Linking, Segmentation, and Alignment 			|Linking, Segmentation, and Alignment|
|analysis 		|18 Simple Analytic Mechanisms 						|Analysis and Interpretation|
|iso-fs 		|19 Feature Structures 								|Feature Structures|
|nets 			|20 Graphs, Networks, and Trees 					|Graphs, networks, and trees|
|certainty 		|22 Certainty, Precision, and Responsibility 		|Certainty and Uncertainty|
|tagdocs 		|23 Documentation Elements 							|Documentation Elements|

This project aims to build a generalized TEI processor by processing each module one-by-one, and a generalized encoder by accepting user input and placing it into a module based on defined rules, aiming to eliminate user error and document variation by simplifying the process of TEI document generation.

The modules will now be described briefly.

### TEI Infrastructure

### TEI Header

The \<teiheader\> tag requires one component, \<fileDesc\>. The other four principal components are optional: \<encodingDesc\>, \<profileDesc\>, \<xenoData\>, and \<revisionDesc\>.

### Common Metadata

### Common Elements
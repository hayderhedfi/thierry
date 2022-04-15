import styles from '../styles/Home.module.css';


export default function Cgu() {

  const definitions = [
    {
      def: "Acheteur",
      text: "Désigne la personne qui procède à l’achat d’un ou plusieurs NFT sur le Site."
    },
    {
      def: "Avantages exclusifs",
      text: "Désigne les avantages attachés à certains Produits et attribués à certains acheteurs dans le cadre du tirage au sort, en plus des Avantages Préférentiels."
    },
    {
      def: "Avantages préférentiels",
      text: "Désigne les avantages attachés à tous les Produits et attribués à tous les acheteurs, indifféremment des Produits obtenus dans le cadre du tirage au sort."
    }, {
      def: "Blockchain",
      text: "Désigne la technologie numérique permettant le stockage et le transfert de crypto-actifs, dont les jetons numériques utilisés comme mode de paiement et les jetons non fongibles acquis sur le Site."
    }, {
      def: "Commande",
      text: "Désigne l’opération par laquelle l’Acheteur procède à l’achat de NFT."
    }, {
      def: "CGU",
      text: "Désigne le contrat qui établit les modalités d’accès et d’utilisation du présent Site, qui s’applique à toute personne accédant audit Site."
    }, {
      def: "CGV",
      text: "Désigne le contrat qui établit les conditions contractuelles exclusivement applicables en cas d’achat de NFT conclu par un Acheteur avec la Société sur le Site."
    }, {
      def: "Fresque",
      text: "Désigne le visuel des images créées par NEFTY SEVEN pouvant faire l’objet d’une attribution gratuite à l’issue de l’achat d’un Produit."
    }, {
      def: "Gas fees",
      text: "Désigne les frais prélevés en complément du paiement du prix d’achat des NFT, nécessaires pour authentifier la transaction, en cas de paiement en actifs numériques par l’intermédiaire de la Blockchain."
    }, {
      def: "KYC",
      text: "Désigne les processus mis en place pour authentifier une transaction, par la vérification de l’identité de l’Acheteur."
    }, {
      def: "Nefty Seven",
      text: "Désigne la dénomination commerciale de la Société."
    }, {
      def: "Nous",
      text: "Désigne la Société."
    }, {
      def: "NFT",
      text: "Désigne les jetons non fongibles proposés à la vente sur le Site."
    }, {
      def: "Pixel",
      text: "Désigne le visuel des Produits créés par NEFTY SEVEN.      "
    }, {
      def: "Plateforme",
      text: "Désigne le support édité par la Société pour présenter et vendre des NFT aux Utilisateurs."
    }, {
      def: "Produits",
      text: "Désigne les NFT mis en vente sur le Site par la Société.      "
    }, {
      def: "Site",
      text: "Désigne le site web accessible à l’adresse suivante : URL et édité par la Société."
    }, {
      def: "Société",
      text: "Désigne la société NEFTY SEVEN (RCS PARIS, n°797 978 996) en sa qualité d’éditeur du Site, de la Plateforme NEFTY SEVEN, et de Vendeur des NFT."
    }, {
      def: "Symboles",
      text: "ésigne le symbole permettant de signaler l’existence d’un Avantage Exclusif reçu par un Acheteur suivant le tirage au sort.."
    }, {
      def: "Vente primaire",
      text: "Désigne l’opération de vente initiale réalisée sur le site web (URL), par laquelle NEFTY SEVEN offre les NFT créés au public, par opposition aux reventes sur des « marchés secondaires », plateformes tierces à NEFTY SEVEN.    "
    },
    , {
      def: "Wallet",
      text: "Désigne le portefeuille numérique sécurisé sur lequel l’Acheteur conserve ses actifs numériques utilisés pour l’achat de NFT.      "
    },
  ]
  return (
		<div className="container px-5 cgu">
			<div className="lg:px-20 flex flex-col white cgu">
				<h1 className="py-4 text-left hero-title w-full">
					Conditions Générales d'Utilisation
				</h1>
				<p className="font-bold">Qui sommes nous ?</p>
				<p className="text-left">
					NEFTY SEVEN (« NEFTY SEVEN », « Nous », la « Plateforme » ou la «
					Société ») est une plateforme de vente de jetons non fongibles (« NFT
					») accessible à l’adresse suivante : www.neftyseven.com (ci-après le «
					Site »).
				</p>
				<p className="text-left">
					Nous avons créé des NFT représentant vos influenceurs préférés et qui
					vous donnent accès à des avantages préférentiels. Vous pouvez acheter
					ces NFT pour votre usage privé, par exemple pour les exposer sur vos
					réseaux sociaux, ou pour les revendre sur d’autres plateformes.{" "}
				</p>
				<p className="text-left">Nos coordonnées sont les suivantes :</p>
				<p className="text-left">NEFTY SEVEN </p>
				<ul>
					<li> Société par actions simplifiée (SAS) </li>
					<li> RCS PARIS, n°797 978 996 </li>
					<li> 10, Rue de Penthièvre, 75008 PARIS </li>
					<li> Adresse électronique : thierry@neftyseven.com </li>
					<li> Téléphone :</li>
				</ul>
				<br />
				<p> Directeur de la publication : M. Thierry CORBEL </p>
				<p>
					{" "}
					Délégué à la Protection des Données/Data Protection Officer : M.
					Thierry CORBEL{" "}
				</p>
				<p> Webmaster : M. Thierry CORBEL </p>
				<p>Le site est hébergé par : </p>
				<ul>
					<li> Société par actions simplifiée (SAS) </li>
					<li> RCS PARIS, n°797 978 996 </li>
					<li> 10, Rue de Penthièvre, 75008 PARIS </li>
					<li> Adresse électronique : thierry@neftyseven.com </li>
					<li> Téléphone :</li>
				</ul>

				<hr className="hr-hero w-full my-10" />
				<div className="flex flex-col white mb-10">
					<p className="py-4 text-left text-2xl font-bold">Définitions</p>
					{definitions.map((d, i) => {
						return (
							<p className="text-left py-1">
								{" "}
								<span className="font-bold">"{d.def}" </span>- {d.text}{" "}
							</p>
						);
					})}
				</div>
				<hr className="hr-hero w-full my-10" />
				<div>
					<p className="text-2xl font-bold">
						Les présentes Conditions Générales sont composées de deux parties :
					</p>
					<p>
						Les Conditions Générales d’Utilisation (« CGU ») établissent les
						conditions d’accès et d’utilisation du Site et s’appliquent à toute
						personne accédant au Site (« l’Utilisateur »). Il est conseillé à
						l’Utilisateur de régulièrement consulter les présentes CGU. La
						dernière version publiée prévaut sur toute autre version ou tout
						autre document contradictoire. L’Utilisateur est invité à les lire
						attentivement avant de poursuivre sa navigation sur le Site.
					</p>
					<p>
						La connexion et la navigation sur le Site valent acceptation sans
						réserve des présentes CGU, quels que soient les moyens techniques
						d’accès et les terminaux utilisés. Les présentes CGU s’appliquent à
						toute déclinaison ou extension du Site. En cas de désaccord, aucun
						usage du Site, d’une déclinaison ou d’une extension ne peut être
						effectué par l’Utilisateur.
					</p>
					<p>
						Les Conditions Générales de Vente (« CGV ») établissent les
						conditions contractuelles exclusivement applicables à tout contrat
						(la « Vente ») portant sur l’achat de nos NFT, conclu par un
						acheteur (« l’Acheteur ») ayant la qualité de consommateur au sens
						de l’article liminaire du Code de la consommation. Elles
						s’appliquent sans restriction ni réserve à toutes les ventes de NFT
						commandés par les Acheteurs, indifféremment de leur lieu de
						résidence (France métropolitaine, Corse, Outre-Mer, Union européenne
						et monde entier).{" "}
					</p>
					<p>
						Nous nous réservons le droit de modifier les présentes Conditions
						Générales à tout moment.{" "}
					</p>
					<p>
						En cas de Vente, les CGV applicables sont celles en vigueur à la
						date de la commande passée par l’Acheteur.{" "}
					</p>
				</div>
				<hr className="hr-hero w-full my-10" />
				<div>
					<p className="font-bold">SPÉCIFICITÉS DE LA VENTE DE NFT </p>
					<p>
						Les NFT vendus sur la Plateforme sont des biens incorporels entrant
						dans la catégorie des crypto-actifs. Les crypto-actifs sont des
						biens incorporels qui reposent sur la technologie blockchain, soit
						un registre numérique qui garantit, sous conditions, le stockage et
						le transfert en pair-à-pair d’unités de valeurs numériques (la «
						Blockchain »)..
					</p>
					<p>
						A ce jour, les NFT n’entrent pas dans la catégorie des actifs
						numériques au sens de la loi PACTE du 22 mai 2019 créant l’article
						L. 54-10-1 du Code monétaire et financier, n’étant ni un jeton
						numérique, ni un actif numérique.
					</p>
					<p>
						L’achat et la conservation des NFT dépend entièrement du système de
						la Blockchain. Le Vendeur, par l’intermédiaire du Site, n’est pas
						garant du bon fonctionnement de la Blockchain, qui est entièrement
						décentralisé et hors de son contrôle. La Plateforme n’a aucune
						obligation envers les Utilisateurs et les Acheteurs en cas de
						défaillance systémique ou en cas d’erreur, faute, omission ou
						violation du fait de ces derniers entraînant la perte de jetons
						numériques, des actifs numériques, ou des NFT achetés sur la
						Plateforme.{" "}
					</p>
					<p>
						Les Utilisateurs, y compris et notamment lorsqu’ils sont Acheteurs,
						sont informés du fait que :
					</p>
					<p>
						1 - La vente des NFT proposée par l’intermédiaire de la Plateforme
						n’est pas une offre au public de jetons au sens de l’article L.
						552-3 du Code monétaire et financier. Le Vendeur n’est donc pas
						soumis aux obligations du Livre V, Chapitre II du Code monétaire et
						financier, et n’a pas sollicité de visa auprès de l’Autorité des
						marchés financiers;
					</p>
					<p>
						2 - Le Vendeur n’est pas un prestataire de services sur actifs
						numériques au sens de l’article L. 54-10-3 du Code monétaire et
						financier, dès lors le service proposé n’entre pas dans le champ
						d’application de l’article L. 54-10-2 du Code monétaire et
						financier. Le Vendeur n’a pas sollicité d’enregistrement ou
						d’agrément auprès de l’Autorité des marchés financiers au titre du
						statut de prestataire de services sur actifs numériques ;
					</p>
					<p>
						3 - Le Vendeur n’est pas un intermédiaire en biens divers au sens de
						l’article L. 551-1 du Code monétaire et financier, dès lors que la
						vente proposée n’a pour objectif ni de revaloriser le capital
						investi, ni de réaliser un rendement financier direct, indirect
						et/ou tout effet économique similaire, bien que l’Acheteur soit
						libre d’en disposer comme souhaité après la Vente.
					</p>
					<p>
						Les jetons numériques utilisés pour acheter des NFT évoluent sur un
						marché indépendant, décentralisé et non règlementé. A l’inverse des
						actifs financiers et des monnaies traditionnels, les jetons
						numériques et les NFT ne sont pas suivis par une banque centrale et,
						en conséquence, ne peuvent faire l’objet de mesures correctives
						pouvant protéger leur valeur ou leur contre-valeur en devise. Les
						marchés d’actifs numériques ne dépendent uniquement que de l’offre
						et de la demande.
					</p>
					<p className="font-bold">
						En conséquence, le Vendeur ne garantit pas l’Acheteur quant à la
						liquidité, la valeur des NFT acquis et la contre-valeur de ces NFT
						en devise.{" "}
					</p>

					<p className="font-bold">PROPRIETE INTELLECTUELLE</p>
					<p>
						Le Site et chacun des éléments qui le compose, notamment les logos,
						graphismes, images, vidéos, animations, sons, logos, gifs, icônes,
						photographies, etc., ainsi que leur mise en forme, sont la propriété
						intellectuelle exclusive de la Société, ou font l’objet d’une
						autorisation d’utilisation, à l’exception des marques, logos ou
						contenus tierces et/ou appartenant à d’autres sociétés partenaires
						qui pourraient être cités.{" "}
					</p>
					<p>
						L’Utilisateur n’est pas autorisé à reproduire, représenter,
						modifier, traduire et/ou adapter, partiellement ou totalement, à
						titre onéreux ou gratuit, le Site et chacun des éléments qui le
						compose, ni reproduire ou représenter de telles traductions,
						adaptations et modifications, partiellement ou totalement, à titre
						onéreux ou gratuit, sans l’accord préalable écrit de la Société.
					</p>
					<p>
						La représentation ou reproduction, par quelque procédé que ce soit,
						constitue une contrefaçon sanctionnée par les articles L. 335-2 et
						suivants du Code de la propriété intellectuelle.{" "}
					</p>

					<p className="font-bold">
						DROIT APPLICABLE ET JURIDICTION COMPÉTENTE{" "}
					</p>
					<p>
						La langue originelle des présentes Conditions Générales est la
						langue française. En cas de traduction, notamment contradictoire,
						seule la version française fait foi. La conclusion, l’interprétation
						et la validité des présentes Conditions Générales et l’ensemble des
						contrats qui en découlent et leurs suites sont soumis à la loi et à
						la règlementation française en vigueur, à l’exclusion de toute autre
						législation quelle que soit la nationalité de l’Utilisateur.{" "}
					</p>
					<p>
						L’inefficacité de l’une des quelconques clauses des présentes
						Conditions Générales, dès lors qu’elle ne remet pas en cause
						l’équilibre contractuel, n’affectera que la clause concernée sans
						pouvoir entraîner l’annulation des présentes Conditions Générales
						dans leur ensemble. Nous remplacerons la clause affectée dans les
						plus brefs délais.{" "}
					</p>
					<p>
						Pour toute question ou réclamation concernant le Site, la
						Plateforme, les NFT, la conclusion et/ou l’exécution d’une Vente,
						l’Utilisateur et l’Acheteur sont invités à nous contacter aux
						adresses précédemment communiquées.{" "}
					</p>
				</div>
				<hr className="hr-hero w-full my-10" />
				<div>
					<p className="font-bold text-2xl">
						ARTICLE 1er – DESCRIPTION DES SERVICE
					</p>
					<p>
						Le Site a pour objet de présenter la Plateforme, qui est un
						catalogue des NFT proposés à la vente, sans aucune obligation
						d’achat pour les Utilisateurs.
					</p>
					<p>Le Site permet d’accéder gratuitement aux services suivants :</p>
					<ul>
						<li>Accès à la liste des NFT proposés à la vente;</li>
						<li>Accès aux informations relatives au Vendeur ;</li>
						<li>Redirection vers nos réseaux sociaux. ;</li>
					</ul>
					<p>
						Le Site est accessible gratuitement en tout lieu à tout Utilisateur
						ayant un accès Internet. Tous les frais supportés par l’Utilisateur
						pour accéder au service (matériel informatique, logiciels, connexion
						Internet, etc.) sont à sa charge.
					</p>
					<p>
						Si un Utilisateur souhaite procéder à l’achat des produits exposés
						sur le Site, il accepte de se soumettre, sans restriction ni
						réserve, à nos Conditions Générales de Vente ci-dessous, qui lui
						seront de nouveau communiquées lors de la passation d’une Commande.{" "}
					</p>

					<p className="font-bold text-2xl">ARTICLE 2 – NAVIGATION</p>
					<p>
						Nous mettons en œuvre toutes les solutions techniques à notre
						disposition pour permettre l’accès au Site 24/24 et 7 jours sur 7.
						Toutefois, nous nous réservons la faculté de suspendre, limiter ou
						interrompre l’accès au Site ou à certaines pages de celui-ci afin de
						procéder à des modifications de contenu, des mises à jour ou toute
						autre action jugée nécessaire au bon fonctionnement du Site.
					</p>
					<p>
						Des liens hypertextes peuvent être présents sur le Site.
						L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira
						de notre Site. Nous n’avons pas de contrôle sur les pages web sur
						lesquelles aboutissent ces liens et ne sommes pas responsables de
						leur contenu.
					</p>
					<p className="font-bold">
						Tout évènement ayant pour conséquence un dysfonctionnement du Site
						n’engage pas notre responsabilité. L’Utilisateur accepte de ne pas
						nous tenir rigueur de toute interruption ou suspension du service,
						même sans préavis. L’Utilisateur reste intégralement de la
						protection de son matériel, de ses données, de l’utilisation qu’il
						fait du Site et de ses services et d’une méconnaissance de la lettre
						ou de l’esprit des présentes CGU.
					</p>

					<p className="font-bold text-2xl">
						ARTICLE 3 – ANNULATION OU SUSPENSION DE L’ACCÈS AU SITE
					</p>
					<p>
						Nous nous réservons le droit de sanctionner toute violation des
						présentes Conditions Générales, d’Utilisation ou de Vente, par une
						suspension des droits d’accès et d’utilisation du Site, ce
						immédiatement et sans préavis.{" "}
					</p>

					<p className="font-bold text-2xl">
						ARTICLE 4 – POLITIQUE DE CONFIDENTIALITÉ – DONNÉES PERSONNELLES
					</p>
					<p className="font-bold text-2xl">COOKIES</p>
					<p>
						Lors de la première connexion sur le Site, l’Utilisateur est averti
						par un bandeau en bas de l’écran que des informations relatives sont
						susceptibles d’être enregistrées dans des fichiers dénommés
						« cookies ».
					</p>
					<p>
						La présente politique d’utilisation des cookies vous informe sur les
						dispositions que nous mettons en œuvre en matière de navigation web.
						Nous vous invitons à lire attentivement cet article pour connaître
						et comprendre nos pratiques quant au traitement de vos données
						personnelles.{" "}
					</p>
					<p>
						La Société, en tant qu’éditeur du présent Site, pourra procéder à
						l’implantation d’un cookie sur le disque dur de votre terminal afin
						de vous garantir une navigation fluide et optimale sur notre Site.
						Le Site peut être amené à vous demander l’acceptation des cookies
						pour des besoins de statistiques et d’affichage. L’attention de
						l’Utilisateur est attirée sur le fait que certaines parties de ce
						site ne peuvent être fonctionnelles sans l’acceptation de cookies.
					</p>
					<p>
						Les cookies sont des petits fichiers texte de taille limitée qui
						nous permettent de reconnaître votre ordinateur, votre tablette ou
						votre mobile aux fins de personnaliser les services que nous vous
						proposons. Les cookies ne permettent pas de vous identifier. Les
						cookies sont utilisés dans l’unique but d’améliorer l’interactivité
						et la performance de notre Site et de vous adresser un contenu
						adapté. Ces informations ne font pas l’objet d’une communication
						auprès de tiers sauf lorsque la Société a obtenu votre consentement
						préalable ou lorsque la divulgation de ces informations est requise
						par la loi, sur ordre d’une juridiction ou toute autre autorité
						administrative ou judiciaire habilitée à en connaître.
					</p>
					<u>Cookies de réseaux sociaux</u>
					<p>
						Les cookies de partage des réseaux sociaux sont émis et gérés par
						l’éditeur du réseau social concerné. Sous réserve de votre
						consentement, ces cookies vous permettent de partager facilement une
						partie du contenu publié sur le Site, notamment par l’intermédiaire
						d’un bouton applicatif de partage selon le réseau concerné.
					</p>
					<u>Paramétrage des cookies</u>
					<p>
						La grande majorité des navigateurs web prévoient la configuration
						par défaut pour que le dépôt de cookies soit autorisé. Vous avez la
						possibilité de modifier ce paramètre par défaut afin que la totalité
						ou une partie des cookies soient rejetés systématiquement. Refuser
						le dépôt des cookies risque d’altérer votre expérience utilisateur
						ainsi que de compromettre certaines fonctionnalités du Site. Le cas
						échéant, la Société décline toute responsabilité concernant les
						conséquences liées à la dégradation de vos conditions de navigation
						et de votre expérience utilisateur. Ces conséquences ne sauraient
						constituer un dommage et vous ne pourrez prétendre à aucune
						indemnité de ce fait. Votre navigateur vous permet également de
						supprimer les cookies existants sur votre terminal ou encore de vous
						signaler lorsque de nouveaux cookies sont susceptibles d’être
						déposés sur votre terminal. Ces paramétrages n’ont aucune incidence
						sur la navigation mais vous feront perdre tous les avantages
						d’utilisation liés aux cookies.
					</p>
					<u>Paramétrage du navigateur internet</u>
					<p>
						Afin de vous aider dans la modification de vos préférences liées aux
						cookies, vous trouverez ci-dessous les liens vers les aides
						nécessaires pour accéder au menu de votre navigateur :
						<ul>
							<li>
								Chrome : https://support.google.com/chrome/answer/95647?hl=fr
							</li>
							<li>
								Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies
							</li>
							<li>
								Opera : http://help.opera.com/Windows/10.20/fr/cookies.html{" "}
							</li>
							<li>
								{" "}
								Safari :
								https://support.apple.com/fr-fr/guide/mdm/mdmf7d5714d4/web
							</li>
						</ul>
						<p>
							{" "}
							Pour de plus amples informations concernant les outils de maîtrise
							des cookies, vous pouvez consulter le site internet de la CNIL : {" "}
						</p>
					</p>
					<p>https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser </p>

					<u>Utilisation de cookies tiers</u>
					<p>
						Veuillez noter que la Société utilise les services tiers pour
						connaître votre utilisation de ce site, ceci afin d’optimiser votre
						expérience utilisateur. Ces tiers parties (par exemple les services
						d’analyse de trafic web) peuvent également utiliser des cookies que
						nous ne maitrisons pas.
					</p>

					<u>DONNÉES PERSONNELLES</u>
					<p>
						Le présent Article a pour objet d’informer les utilisateurs du Site
						des engagements et des mesures que nous avons pris pour respecter la
						règlementation applicable aux termes du Règlement du Parlement
						européen et du Conseil du 27 avril 2016 relatif à la protection des
						personnes physiques à l'égard du traitement des données à caractère
						personnel et à la libre circulation de ces données, et abrogeant la
						directive 95/46/CE (règlement général sur la protection des données)
						(ci-après « RGPD »).
					</p>
					<p>
						La présente Politique de Confidentialité est susceptible d’être
						modifiée ou complétée à tout moment par la Société, notamment en vue
						de se conformer à toute évolution législative, réglementaire,
						jurisprudentielle ou technologique.{" "}
					</p>
					<p>
						Nous nous engageons à respecter les dispositions de l’article 5 du
						RGPD. Notamment, la collecte et le traitement des données respecte
						l’obligation de recueillir le consentement de l’Utilisateur,
						propriétaire des données. A chaque fois que des données sont
						collectées, il est indiqué à l’Utilisateur qu’elles sont collectées
						et pour quelles raisons elles le sont. Seules les données
						nécessaires à la bonne exécution des objectifs poursuivis par le
						Site sont collectées.
					</p>
					<p>
						D’une manière générale, il vous est possible de visiter le Site sans
						communiquer aucune information personnelle vous concernant. Vous
						n’êtes en aucune manière obligé de nous transmettre ces
						informations. Néanmoins, en cas de refus, il se peut que vous ne
						puissiez pas bénéficier de certaines informations ou services que
						vous avez demandé.{" "}
					</p>

					<u>FINALITÉS DE LA COLLECTE ET DU TRAITEMENT</u>
					<p>
						Les données personnelles de l’Utilisateur qui sont collectées
						directement par la voie de formulaires présents sur le Site
						répondent à des finalités explicites, légitimes et déterminées, qui
						consistent notamment à répondre à sa demande ou à la transmettre aux
						services en charge de répondre à sa demande.
					</p>
					<u>
						En cas de simple visite sur le Site, nous utilisons les données
						collectées pour :
					</u>
					<p>
						Des fins statistiques, notamment pour enrichir le contenu proposé et
						l’adapter aux besoins des Utilisateurs et des Acheteurs ; Répondre
						aux sollicitations et aux demandes d’informations sur les services
						offerts ; En cas d’achat sur le Site, nous utilisons les données
						collectées pour : pour permettre la passation d’une commande, le
						paiement et la livraison des NFT commandées à l’adresse communiquée.
					</p>

					<p>
						Pour passer une commande, l’Utilisateur devra communiquer les
						coordonnées de son Wallet (adresse publique uniquement). Nous nous
						engageons à ne demander aucune donnée qui n’est pas nécessaire pour
						la passation, le suivi et la livraison de la commande.
					</p>

					<p>
						Les données personnelles communiquées par l’Utilisateur pourront
						être communiquées et traitées par des sous-traitants pour la
						validation et la livraison d’une commande. La Société s’engage à ce
						que le sous-traitant respecte les obligations auxquelles elle est
						soumise en vertu du RGPD et à ce qu’il fasse respecter lesdites
						obligations par ses propres sous-traitants pour protéger la chaîne
						de transmission des données.
					</p>

					<p>
						La communication des données personnelles dans ce cadre est
						volontaire. Si l’Utilisateur ne fournit pas ces données
						personnelles, il ne pourra pas bénéficier des services de commande
						proposés sur le Site. Lorsque l’Utilisateur communique au Site ses
						coordonnées pour la passation et la livraison d’une commande, il
						consent expressément à la collecte et au traitement de ces données
						pour la finalité du service correspondant. Nous ne collectons pas de
						données personnelles sensibles par le biais du Site. En fournissant
						volontairement à la Société des données personnelles qui lui ont été
						demandées, l’Utilisateur consent expressément à ce que ses données
						personnelles soient utilisées comme décrit dans les présentes.
						L’Utilisateur conserve le droit de demander la limitation ou de
						s’opposer au traitement de ses données par le Site. Nous ne
						refuserons pas cette limitation ou opposition, sauf en cas
						d’existence de motifs légitimes et impérieux pouvant prévaloir sur
						les intérêts et les droits et libertés de l’Utilisateur.
					</p>

					<u>CONSERVATION DES DONNÉES</u>
					<p>
						Les données personnelles collectées sont conservées pour le temps
						correspondant à la finalité de la collecte. Ce temps doit être
						compris pour toute la durée de la relation contractuelle établie
						entre la Société et l’Utilisateur, sans préjudice des obligations de
						conservation ou des délais de prescription. Toutefois, au terme du
						délai, nous nous réservons le droit de conserver dans nos archives
						les données pour assurer le respect des obligations légales de
						conservation et/ou d’archivage prévues par le droit de l’Union
						Européenne ou le droit d’un État membre. L’accès aux archives sera
						réservé aux seules personnes habilitées par la Société. La Société
						s’engage à prendre toutes les précautions nécessaires afin de
						préserver la sécurité des données, notamment pour qu’elles ne soient
						pas communiquées à des personnes tierces non autorisées. Le cas
						échéant, la Société s’engage à informer les Utilisateurs de tout
						incident et à communiquer les mesures de correction apportées.
					</p>
					<p>
						La Société s’interdit de traiter, héberger ou transférer les données
						collectées vers un pays situé en dehors de l’Union européenne ou
						reconnu comme « non adéquat » par la Commission européenne sans en
						informer préalablement l’Utilisateur. De manière générale, la
						Société prend toutes les mesures raisonnables pour assurer la
						protection des données, notamment pour prémunir les Utilisateurs
						d’un détournement des données, d’un accès non autorisé, d’une
						divulgation ou d’une altération, par des dispositifs standards tels
						que le pare-feu, la pseudonymisation, le cryptage des données et le
						blocage de l’accès à celle-ci à toute personne tierce par un mot de
						passe.
					</p>

					<u>DROITS DES UTILISATEURS – DÉLÉGUÉ À LA PROTECTION DES DONNÉES</u>
					<p>
						Tout Utilisateur dispose d’un droit d’accès, de rectification et
						modification, de portabilité, de limitation et de suppression des
						données communiquées et collectées. Il dispose également d’un droit
						d’opposition au traitement de ses données personnelles pour des
						motifs légitimes, ainsi que d’un droit d’opposition à ce que ses
						données soient utilisées à des fins de prospection commerciale. Il
						dispose enfin du droit de définir des directives générales et
						particulières définissant la manière dont il entend que soient
						exercés, après son décès, ces droits. Pour exercer ses droits,
						l’Utilisateur doit adresser un courrier au Délégué à la Protection
						des Données de La Société, accompagné de la photocopie d’un titre
						d’identité comportant sa signature, à l’adresse postale suivante :
						10, Rue de Penthièvre, 75008 PARIS ou à l’adresse de courrier
						électronique suivante : thierry@neftyseven.com. L’Utilisateur peut
						toujours introduire une réclamation auprès de la CNIL.
					</p>

					<u>DEVOIRS DES UTILISATEURS</u>
					<p>
						Il appartient à l’Utilisateur de prendre toutes les mesures
						appropriées de façon à protéger ses propres données et/ou logiciels
						stockés sur son et/ou ses matériels téléphonique et/ou informatique
						contre, notamment, toute atteinte, dysfonctionnement, virus,
						piratage, sans que cette liste ne soit exhaustive. Le Site peut
						contenir des liens vers d’autres sites internet ou d’autres
						ressources disponibles en ligne. Il est rappelé à l’Utilisateur que
						nous ne disposons d’aucun moyen pour contrôler les sites autre que
						l’URL. En aucun cas, la Société ne peut être tenue pour responsable
						pour tout dommage, de quelque nature que ce soit, résultant du
						contenu de ces sites ou de ses sources externes. Toutefois, si
						l’Utilisateur constate une lacune ou une erreur paraissant être un
						dysfonctionnement, il est possible de contacter La Société aux
						coordonnées ci-dessus communiquées en décrivant le problème de la
						manière la plus précise possible. L’Utilisateur s’engage à ne pas
						tenter de perturber, interrompre le fonctionnement du Site et des
						réseaux connectés au Site, notamment par le téléchargement de
						fichiers et logiciels conçus pour nuire au bon fonctionnement des
						logiciels et matériels utilisés pour la Plateforme et le Site.
					</p>

					<u>
						RISQUES INHÉRENTS À L’UTILISATION D’INTERNET ET DE LA BLOCKCHAIN
					</u>
					<p>
						Les services techniques proposés sur la Plateforme par
						l’intermédiaire du Site et de la Blockchain requièrent un temps de
						traitement nécessaire pour répondre, consulter, interroger ou
						transférer les services.{" "}
					</p>
					<p>
						L’Utilisateur déclare connaître et accepter les limites et les
						problématiques du réseau Internet et de la Blockchain pour
						lesquelles la responsabilité de la Société ne saurait être
						engagée (liste non exhaustive) :
						<ul>
							<li>
								Les caractéristiques et les limites du réseau Internet et,
								notamment les caractéristiques fonctionnelles et des
								performances techniques du réseau Internet ;{" "}
							</li>
							<li>
								Les caractéristiques et les limites du système de la Blockchain,
								et notamment ses fonctionnalités et ses performances techniques;{" "}
							</li>
							<li>
								Les problèmes liés à la connexion et/ou d’accès au réseau
								Internet, aux sites Internet et aux Wallets ;
							</li>
							<li>
								Les problèmes liés à la disponibilité et à l’encombrement des
								réseaux ;{" "}
							</li>
							<li>
								Les problèmes liés à la défaillance ou à la saturation des
								réseaux ;{" "}
							</li>
							<li>
								Les problèmes liés aux temps de transit, à l’accès aux
								informations mises en ligne, aux temps de réponses pour
								afficher, consulter, interroger ou autrement transférer des
								données ;{" "}
							</li>
							<li>Les risques d’interruption ; </li>
							<li>
								L’absence de protection de certaines données contre des
								détournements éventuels ou piratage ;{" "}
							</li>
							<li>
								Les risques de contamination par d’éventuels virus circulant sur
								lesdits réseaux.{" "}
							</li>
						</ul>
					</p>
				</div>
			</div>
			<br />
		</div>
	);
}
import Image from 'next/image';
import space from '../public/space.png';
import space2 from '../public/space-nefty7.png'

export default function Cgv() {
  return (
		<div className="container px-5">
			<div className="flex flex-col white cgu">
				<h1 className="py-4 text-left hero-title w-full">
					CONDITIONS GÉNÉRALES DE VENTE
				</h1>
				<h2 className="text-2xl font-bold py-4 text-left w-full">
					RESPONSABILITÉ LIMITÉE DE NEFTY SEVEN
				</h2>
				<p className="font-bold">
					Avant de procéder à la Vente, Nous rappelons expressément à l’Acheteur
					que :
				</p>
				<p className="text-left">
					NEFTY SEVEN n’est pas garant du bon fonctionnement du Site : Bien que
					nous prenions toutes les mesures nécessaires pour assurer à tous un
					accès au Site, nous faisons face à des risques d’encombrement, de
					saturation, voire de défaillance du Site, qui causeraient une
					impossibilité d’accéder au Site et/ou à la Vente du fait d’une
					surcharge des serveurs, notamment à la suite de nos communications sur
					le lancement de la Vente et à l’ouverture de la Vente. Nous nous
					réservons la faculté de suspendre la Vente, de la reporter ou d’en
					prolonger la durée en cas de surcharge. En conséquence, l’Acheteur
					reconnaît et accepte que la responsabilité de NEFTY SEVEN ne saurait
					être mise en cause en cas d’impossibilité de procéder à l’achat de NFT
					et/ou d’interruption de l’opération de Vente à la suite d’une
					interruption de l’accès au Site causée par une surcharge ou toute
					autre défaillance technique de l’hébergeur et/ou du réseau Internet
					et, plus généralement, pour quelque cause que ce soit.
				</p>
				<p>
					NEFTY SEVEN n’est pas garant du bon fonctionnement de la Blockchain et
					des Wallets : La Blockchain et les Wallets reposent sur un réseau
					décentralisé, qui n’est pas organisé, ni contrôlé par NEFTY SEVEN. Il
					appartient à l’Utilisateur de prendre toutes les précautions
					techniques nécessaires pour se prémunir d’un risque de perte de ses
					actifs numériques, causé par son propre fait ou par une défaillance
					systémique. En conséquence, l’Acheteur reconnaît et accepte que la
					responsabilité de NEFTY SEVEN ne saurait être mise en cause en cas
					d’impossibilité de procéder à l’achat de NFT et/ou d’atteinte à
					l’intégrité de son Wallet, à la suite de l’insuffisance des
					précautions techniques à prendre et/ou d’une défaillance systémique.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 5 – APPLICATION DES CONDITIONS GÉNÉRALES DE VENTE
				</p>
				<p className="text-left">
					Les conditions de la Partie « Conditions Générales de Vente »
					s’appliquent dès que l’Utilisateur décide de procéder à l’achat d’un
					ou plusieurs NFT proposés à la vente sur le Site.
				</p>
				<p className="text-left">
					Les présentes CGV sont des conditions supplémentaires qui complètent
					les CGU. Elles seront portées à l’attention de l’Acheteur, qui devra
					confirmer son acceptation lors de la passation d’une commande. En cas
					de conflit avec d’autres conditions, celles-ci prévaudront.
				</p>
				<p className="font-bold">
					Les présentes CGV sont applicables à la première opération de vente
					effectuée par NEFTY SEVEN, désignée comme la « Vente Primaire ». Nous
					nous réservons la faculté de modifier les CGV dans le cadre des
					opérations de ventes postérieures.
				</p>
				<p>
					Les NFT achetés sur le Site sont exclusivement à usage privé.
					L’Acheteur pourra disposer des NFT achetés pour un usage personnel, à
					des fins d’exposition ou à des fins de revente sur un marché
					secondaire.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 6 – ACCÈS À LA VENTE
				</p>
				<p>
					Pour pouvoir procéder à l’achat de NFT, l’Acheteur doit être âgé d’au
					moins DIX-HUIT (18) ANS et disposer de sa pleine capacité juridique.
					L’âge de l’Acheteur devra être confirmé à chaque commande sur le Site.
					<br />
					<br />
					L’Utilisateur mineur ne peut pas passer de commande. Seul son
					représentant légal peut procéder à une commande sur le Site.
					<br />
					<br />
					L’Acheteur s’engage à ne pas procéder à cet achat dans des fins
					contraires à la législation applicable en matière de lutte contre le
					blanchiment d’argent et le financement du terrorisme, et plus
					généralement, à des fins contraires à la législation en vigueur.
					<br />
					<br />
					L’Acheteur déclare avoir procédé lui-même à l’évaluation de
					l’opportunité de l’opération.
					<br />
					<br />
					Avant de poursuivre la Vente, l’Acheteur déclare avoir pris
					connaissance des présentes CGV et les avoir acceptées en cochant la
					case prévue à cet effet avant la mise en œuvre de la procédure de
					commande en ligne sur le Site. La validation de la commande par le
					Client vaut acceptation sans restriction ni réserve des présentes CGV.
					Le Client reconnaît avoir la capacité requise pour contracter et
					acquérir les NFT proposés sur le Site.
					<br />
					<br />
					Les données enregistrées dans le système informatique du Vendeur et
					sur la Blockchain constituent la seule preuve valable de l’ensemble
					des transactions conclues avec le Client.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 7 – PRODUITS – FONCTIONNEMENT DE LA VENTE PRIMAIRE PAR NEFTY
					SEVEN
				</p>
				<p>
					Les NFT proposés à la vente représentent des éléments de décor
					indépendants, et sont vendus sous forme numérique uniquement (ci-après
					les « Produits » ou les « Pixels »).
					<br />
					<br />
					Nous avons créé SEPT MILLE SEPT CENT SOIXANTE-DIX-SEPT (7.777) Pixels.
					<br />
					<br />
					En plus des Pixels, nous avons créé UNE (1) fresque représentant des
					éléments de décor (la « Fresque »).
					<br />
					<br />
					Nous vous présentons ci-dessous un exemple de Pixel, ce visuel n’étant
					pas contractuel :<br />
					<br />
				</p>
				<div className="text-center">
					<Image src={space} />
				</div>
				<p className="pt-5">
					Nous vous présentons ci-dessus un exemple de Fresque, ce visuel
					n’étant pas contractuel :
				</p>
				<br />
				<br />
				<div className="text-center mb-5">
					<Image src={space2} />
				</div>
				<p className="font-bold">
					Nous gardons le visuel de la Fresque secret, et le divulguerons au fur
					et à mesure de la progression de la Vente Primaire.{" "}
				</p>
				<p>
					Les Pixels sont directement commercialisés par NEFTY SEVEN dans le
					cadre d’une première opération de vente sur le Site (la « Vente
					Primaire »).
					<br />
					<br />
					L’offre réalisée lors la Vente Primaire s’entend dans la limite des
					Pixels qui ont été créés. Aucun Pixel supplémentaire ne sera proposé
					dans le cadre de la Vente Primaire dès que la totalité des Pixels est
					vendue.
					<br />
					<br />
					L’achat d’un Produit est de la seule responsabilité de l’Acheteur.
					<br />
					<br />
					Nous nous réservons la possibilité de procéder à une ou plusieurs
					vente(s) supplémentaire(s) après la Vente Primaire. <br />
					<br />
					Nous nous réservons la possibilité de suspendre ou mettre fin à la
					Vente Primaire, indifféremment de l’issue de celle-ci.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 8 – CARACTÈRE ALÉATOIRE DE LA VENTE PRIMAIRE – AVANTAGES
					PRÉFÉRENTIELS
				</p>
				<p>
					Les Produits sont attribués aux Acheteurs de manière aléatoire.
					<br />
					<br />
					Nous avons attaché aux Pixels des « Avantages Préférentiels », comme
					suit :
				</p>
				<ul>
					<li>
						- LA TOTALITÉ (7.777) des Pixels, donne droit aux Acheteurs
						d’accéder à notre premier évènement exclusif dans notre metaverse ;
					</li>
				</ul>
				<p>
					Certains Pixels contiennent, en plus, des avantages supplémentaires
					(les « Avantages Exclusifs ») :
				</p>
				<ul>
					<li>
						- CINQ CENT TRENTE-NEUF (539) Pixels donnent accès à une liste
						privilégiée (« whitelist ») pour accéder à la prévente d’une
						nouvelle opération organisée par NEFTY SEVEN;
					</li>
					<br />
					<li>
						- SEPT (7) Pixels donnent le droit de débloquer et obtenir la
						Fresque ou l’une des SIX (6) variantes de la Fresque, soit au total
						SEPT (7) Fresques à obtenir.{" "}
					</li>
				</ul>
				<br />
				<p>
					Les Avantages Préférentiels sont déjà fixés sur les Produits lors de
					leur commercialisation, et sont attribués aux Acheteurs avec les
					Produits commandés.
					<br />
					<br />
					L’Acheteur pourra découvrir si son Pixel est assorti d’un Avantage
					Exclusif, en recherchant la présence d’un symbole en sur-impression
					imprimé sur son Pixel (le « Symbole »).
					<br />
					<br />
					Pour l’accès à la whitelist, le Symbole est représenté comme suit :
					[Insérer l’exemple]
					<br />
					<br />
					Pour le déblocage d’une Fresque, le Symbole est représenté comme suit
					: [Insérer l’exemple]
					<br />
					<br />
					Les Avantages Exclusifs sont déjà fixés sur les Produits lors de leur
					commercialisation, et sont attribués aux Acheteurs avec les Produits
					commandés :
				</p>
				<ul>
					<li>
						- Le droit d’accès à la liste privilégiée est directement intégré
						aux 539 Pixels gagnants ;
					</li>
					<br />
					<li>
						- La Fresque complète est directement livrée avec l’un des 7 Pixels.
						En conséquence, l’Acheteur reçoit un NFT supplémentaire, qui lui est
						attribué gratuitement avec l’obtention de l’un de ces Produits.
					</li>
				</ul>

				<p className="font-bold">
					En procédant à l’achat, l’Acheteur reconnaît avoir été informé du
					caractère aléatoire de la présente Vente tout en ayant reçu
					communication des caractéristiques essentielles des Produits, compte
					tenu de leur nature et du support de communication utilisé, portant
					sur les fonctionnalités, la compatibilité et l’interopérabilité du
					contenu numérique.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 9 – REVENTE DES NFT SUR UN MARCHÉ SECONDAIRE – TRANSMISSION
					DES AVANTAGES PRÉFÉRENTIELS
				</p>
				<p>
					<span className="font-bold">
						Dans le cadre de la revente des Produits sur un marché secondaire,
						NEFTY SEVEN informe expressément l’Acheteur que :
					</span>
					<br />
					<br />
					- Nous recevons un pourcentage de chaque vente de Produits réalisée
					sur un marché secondaire, à titre de royalties ;<br />
					<br />
					<span className="font-bold">
						La revente a une conséquence sur l’application des Avantages
						Préférentiels :
					</span>
				</p>
				<ul>
					<li>
						° Le droit d’accès au metaverse est transmis avec le Produit tant
						que l’évènement n’a pas eu lieu. Dans ce cas, c’est le propriétaire
						du Produit au jour de la tenue de l’évènement qui accèdera au
						metaverse. L’Acheteur perd le bénéfice de cet Avantage Préférentiel
						en même temps que la vente du Produit ;
					</li>
					<br />
					<li>
						° Le droit d’accès à la liste privilégiée est transmis avec le
						Produit tant que l’évènement n’a pas eu lieu. Dans ce cas, c’est le
						propriétaire du Produit au jour de l’ouverture de la prévente qui
						pourra y accéder. L’Acheteur perd le bénéfice de cet Avantage
						Exclusif en même temps que la vente du Produit ;
					</li>
					<br />
					<li>
						° Le droit d’accès au metaverse et le droit d’accès à la liste
						privilégiée expirent une fois que l’évènement a eu lieu. L’Acheteur
						ne pourra plus transmettre l’Avantage Préférentiel, qui n’existera
						plus ;
					</li>
					<br />
					<li>
						° En conséquence, l’Acheteur déclare être expressément informé du
						fait que les Avantages Préférentiels sont à usage unique et à durée
						déterminée.
					</li>
					<br />
					<li>
						° Le droit à l’attribution gratuite d’une Fresque ne circule pas
						avec les Produits l’ayant contenu s’ils sont revendus sur un marché
						secondaire. En revanche, l’Acheteur ayant débloqué une Fresque est
						libre de la revendre sur le marché secondaire
					</li>
					<br />
				</ul>
				<p className="font-bold">
					- Les prix sur les marchés secondaires de crypto-actifs relèvent
					entièrement de l’offre et de la demande. NEFTY SEVEN ne garantit pas à
					l’Acheteur un prix de revente supérieur au prix payé lors de la Vente
					Primaire et rappelle le caractère volatil du prix des crypto-actifs.{" "}
				</p>
				<p className="font-bold">
					- Postérieurement à l’exécution de la Vente sur notre Site, NEFTY
					SEVEN n’a plus de lien contractuel avec l’Acheteur. NEFTY SEVEN n’est
					pas le cocontractant de l’Acheteur en cas de revente sur un marché
					secondaire. Aucune réclamation ne pourra nous être adressée en cas de
					litige avec les acheteurs et/ou la plateforme de marché secondaire.{" "}
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 10 – PRIX
				</p>
				<p>
					Les prix communiqués sur le Site sont exprimés en euros et en actifs
					numériques, et comprennent :{" "}
				</p>
				<ul>
					<li>
						1 . Lorsque les prix sont exprimés en euros : l’achat du Produit
						toutes taxes comprises et les frais de transaction.
					</li>
					<li>
						2 . Lorsque les prix sont exprimés en actifs numériques : l’achat du
						Produit, toutes taxes comprises.{" "}
					</li>
				</ul>
				<p>
					<span className="font-bold">
						En revanche, les frais de transaction, dits « gas fees », ne sont
						pas compris dans le prix exprimé.
					</span>{" "}
					L’Acheteur sera informé des gas fees applicables à la transaction lors
					de la finalisation de la Commande. Les prix ne comprennent pas les
					frais que l’Acheteur doit engager personnellement pour accéder au
					système de la Blockchain.
				</p>
				<p>
					Il appartient à l’Acheteur d’évaluer le coût de la transaction
					envisagée avant d’opter pour l’un ou l’autre des moyens de paiement
					proposés.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 11 – COMMANDE ET PAIEMENT
				</p>
				<p className="font-bold text-center">11.1 COMMANDE</p>
				<p>
					L’Acheteur sélectionne le nombre de Produits qu’il souhaite acheter.
				</p>
				<p>
					La page suivante résume les Produits qui vont être commandés au
					Vendeur et récapitule le prix unitaire, ainsi que le prix total (la «{" "}
					<span className="font-bold">Commande</span> »). L’Acheteur peut
					vérifier le détail de la Commande, son prix total et peut la corriger
					avant de confirmer son acceptation. L’Acheteur doit vérifier son
					exactitude et rectifier toute erreur avant acceptation.
				</p>
				<p>
					En confirmant son acceptation et préalablement à la validation de la
					Commande par le Vendeur, l’Acheteur reconnaît avoir eu communication
					des CGV ; des caractéristiques du ou des Produits commandés ; du prix
					total de la Commande ; des modalités de paiement et de livraison ; des
					informations relatives à l’identité et aux coordonnées du Vendeur ;
					des informations relatives aux garanties légales et à leur mise en
					œuvre ; la possibilité de recourir au Médiateur de la Consommation ;
					des autres conditions contractuelles, conformément à l’article L.
					221-5 du Code de la consommation.
				</p>

				<p className="font-bold text-center">
					11.2 AUTHENTIFICATION ET PAIEMENT
				</p>
				<p>
					Avant de pouvoir procéder au paiement, l’Acheteur doit confirmer son
					identité auprès de la Plateforme (opération désignée comme le « KYC
					»). Nous imposons cette procédure pour nous assurer de l’identité des
					Acheteurs, dans la limite de nos capacités, afin de lutter contre la
					fraude en ligne et la cybercriminalité.
				</p>
				<p className="underline font-bold">
					En effectuant ce processus de vérification d’identité, l’Acheteur
					déclare et certifie à la Plateforme :
				</p>
				<ul>
					<li className="ml-5">
						I) Être la personne dont il communique la pièce d’identité ;
					</li>
					<li className="ml-5">
						II) Être le propriétaire du moyen de paiement dont il communique les
						coordonnées, et/ou avoir reçu la capacité d’en disposer après
						autorisation du propriétaire.
					</li>
				</ul>
				<p>
					A titre exceptionnel, nous nous réservons la faculté de refuser une
					transaction qui ne paraît pas répondre à ces deux déclarations.
					<br />
					<br />
					L’authentification est effectuée par l’intermédiaire d’un prestataire
					tiers. Nous ne collectons aucune donnée et n’avons pas accès aux
					données communiquées dans ce cadre.
					<br />
					<br />
					<span className="underline">
						Pour procéder à l’Achat, l’Acheteur doit :{" "}
					</span>
				</p>
				<ul>
					<li>
						- Connecter son Wallet sur le Site par l’intermédiaire d’une
						application (ex. Metamask) ;
					</li>
					<li>
						- Sélectionner le mode de paiement choisi : carte bancaire (paiement
						en euros) ou Wallet (paiement en actifs numériques :
					</li>
					<br />
					<li className="ml-5">
						° En cas de paiement par carte bancaire : renseigner les coordonnées
						de la carte bancaire utilisée pour le paiement et, le cas échéant,
						procéder à l’authentification externe expédiée à la banque.
					</li>
					<li className="ml-5">
						°En cas de paiement par Wallet : valider l’opération sur
						l’application.
					</li>
				</ul>
				<p>
					Le prix total demandé pour la commande, correspondant au montant total
					de l’achat tel que défini à l’article 10, est payable comptant en
					totalité au jour de la validation de la Commande par le Client, par
					voie de paiement sécurisé par carte bancaire ou par l’intermédiaire
					d’un Wallet.
				</p>
				<p>
					Le paiement est irrévocable, sauf en cas d’utilisation frauduleuse du
					moyen de paiement utilisé. Dans ce cas, le Client peut contacter le
					Vendeur pour demander l’annulation du paiement et la restitution des
					sommes correspondantes.
				</p>
				<p className="font-bold">
					L’Acheteur reconnaît être le seul responsable de ses moyens de
					paiement. En conséquence, la Plateforme ne garantit pas l’Acheteur en
					cas d’usage non autorisé d’un moyen de paiement qui ne révèle pas de
					transaction anormale, compte tenu de l’authentification effectuée en
					amont.{" "}
				</p>
				<p>
					Les paiements effectués par le Client ne seront considérés comme
					définitifs qu’après encaissement effectif des sommes dues par le
					Vendeur. Aucun frais supplémentaire supérieur aux coûts supportés ne
					pourra être facturé par le Vendeur pour l’utilisation d’un moyen de
					paiement.
				</p>
				<p>
					La Commande confirmée par l’Acheteur et validée par le Vendeur, dans
					les conditions et modalités ici décrite, forme un contrat de vente à
					distance entre l’Acheteur et le Vendeur (la « Vente »).
				</p>
				<p className="font-bold">
					Une fois confirmée par l’Acheteur et le Vendeur, la Vente est
					définitive.
				</p>
				<p>
					La Vente ne peut plus être modifiée, ni annulée par le Client, en
					dehors d’un cas de force majeure. Toutefois, le Vendeur se réserve le
					droit, en cas de non-respect des conditions de paiement, d’annuler la
					livraison des Produits.{" "}
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 11 – LIVRAISON
				</p>
				<p>
					Le Vendeur procèdera à la livraison des Produits sur le Wallet de
					l’Acheteur dès la réception du paiement.
					<br />
					<br />
					La livraison des Produits est effectuée en principe en quelques
					minutes, celles-ci correspondant à la durée de traitement technique de
					la Vente (expédition de l’ordre de commande et distribution par le
					prestataire externe), soit le temps nécessaire pour générer un Pixel
					et l’enregistrer sur la Blockchain sous forme de NFT (opération dite
					de « mint »).
					<br />
					<br />
					<span className="font-bold">
						A compter du transfert du ou des NFT sur le Wallet de l’Acheteur, le
						Vendeur a intégralement exécuté sa prestation due au titre de la
						Vente. En conséquence, le Vendeur n’est pas garant de la
						conservation des NFT par les Acheteurs et n’a aucune capacité d’y
						accéder, y compris et notamment en cas de perte de l’actif.
					</span>
					<br />
					<p>
						Si, après écoulement de ce délai technique de mint et passé un délai
						de DOUZE (12) HEURES, indifféremment de la cause, l’Acheteur n’a pas
						accusé réception des Produits achetés dans le cadre de la Vente, il
						peut contacter notre service client pour déposer une réclamation,
						conformément à l’Article 14.
					</p>
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 12 – GARANTIES DU VENDEUR
				</p>
				<p>
					Les Produits vendus sur le Site sont conformes à la règlementation en
					vigueur et ont des performances compatibles avec un usage non
					professionnel.
					<br />
					<br />
					Tous les Produits vendus par le Vendeur bénéficient de plein droit, et
					sans paiement complémentaire, indépendamment du droit de rétractation,
					et conformément aux dispositions légales :
				</p>
				<ul>
					<li className="ml-5">
						1) De la garantie légale de conformité pour les Produits apparemment
						défectueux, abîmés et/ou endommagés et/ou ne correspondant pas à la
						Commande effectuée par l’Acheteur ;
					</li>
					<br></br>
					<li className="ml-5">
						2) De la garantie légale contre les vices cachés provenant d’un
						défaut de matière, de conception et/ou de fabrication affectant les
						Produits livrés et les rendant impropres à leur destination.{" "}
					</li>
				</ul>
				<p>
					Dans le cadre de la garantie légale de conformité, l’Acheteur dispose
					d’un délai de DEUX (2) ans à compter de la délivrance du bien pour
					actionner le Vendeur. En ce cas, il peut choisir entre la réparation
					ou le remplacement du produit, sous réserve des conditions de coût
					prévues à l’article L. 217-9 du Code de la consommation. Il est
					dispensé de rapporter la preuve de l’existence du défaut de conformité
					durant les DEUX (2) ans suivant la délivrance du produit.
					<br />
					<br />
					Conformément aux articles 1641 à 1644 du Code civil, dans le cadre de
					la garantie en vices cachés, l’Acheteur peut demander la résolution de
					la Vente ou la réduction du prix de vente. Afin de faire valoir ses
					droits, l’Acheteur devra informer le Vendeur par écrit de la
					non-conformité des produits dans un délai maximal de DEUX (2) ans à
					compter de la livraison des produits ou de la découverte des vices
					cachés.
					<br />
					<br />
					Le Vendeur réparera, remplacera ou remboursera les Produits jugés non
					conformes ou défectueux.
					<br />
					<br />
					Le remboursement sera effectué sur le moyen de paiement débité pour
					l’achat.
					<br />
					<br />
					La responsabilité du Vendeur ne saurait être engagée en cas de
					mauvaise utilisation du Produit, d’une utilisation à des fins
					professionnelles, de négligence du Produit, comme en cas d’usure
					normale du Produit, d’accident et/ou de force majeure.
					<br />
					<br />
					<span className="font-bold">
						Le droit de rétractation est exclu pour les contrats de fourniture
						d’un contenu numérique non fourni sur un support matériel. En
						procédant à la Vente, l’Acheteur déclare donner son consentement à
						l’exécution immédiate du contrat, compte tenu de la nature numérique
						des Produits, et, en conséquence, déclare renoncer au droit de
						rétractation dont il dispose.
					</span>
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 13 – FORCE MAJEURE
				</p>
				<p>
					Ni l’Acheteur, ni le Vendeur ne pourra être tenu responsable en cas
					d’inexécution ou de retard dans l’exécution de l’une de leurs
					obligations telles que décrites par les présentes en cas de force
					majeure au sens de l’article 1218 du Code civil.
				</p>

				<p className="text-2xl font-bold text-left w-full pt-5">
					ARTICLE 14 – RÉCLAMATIONS ET RÈGLEMENT DES LITIGES
				</p>
				<p>
					Les présentes CGV sont rédigées en langue française et sont soumises à
					la législation française. Si une condition venait à faire défaut, elle
					serait considérée comme étant régie par les usages en vigueur dans le
					secteur de la vente à distance applicables sur le territoire français.
					<br />
					<br />
					L’Acheteur peut nous adresser toute réclamation à l’adresse suivante :
				</p>
				<ul>
					<li>Service Client : Thierry CORBEL</li>
					<li>Adresse postale : 10, Rue de Penthièvre, 75008 PARIS</li>
					<li>Adresse électronique : thierry@neftyseven.com</li>
				</ul>
				<p>
					Nous nous engageons à traiter votre demande le plus rapidement
					possible à compter de la réception, en fonction du nombre de requêtes
					que nous recevrons.
					<br />
					<br />
					En cas d’échec de la réclamation faite auprès du service support ou en
					l’absence de réponse, l’Acheteur peut soumettre le différend au
					Médiateur de la Consommation, professionnel référencé sur la liste des
					médiateurs de la consommation sur le site de la Commission
					d’évaluation et de contrôle de la Consommation (CECMC,
					www.mediation-conso.fr) et sur la plateforme en ligne de la résolution
					des litiges de la Commission européenne (www.ec.europa.eu).
					<br />
					<br />
					Le Médiateur de la Consommation peut être saisi en ligne, à l’adresse
					suivante : ADRESSE, ou par adresse postale au ADRESSE.
					<br />
					<br />
					La demande de médiation devra être accompagnée des documents
					justificatifs.
					<br />
					<br />
					Tous les litiges auxquels les opérations d’achat et de vente conclues
					en application des présentes CGV pourront donner lieu, concernant leur
					validité, leur interprétation, leur exécution, leur résiliation, leurs
					conséquences et leurs suites et qui n’auraient pu être résolus entre
					le Client et le Vendeur seront soumis aux tribunaux compétents dans
					les conditions de droit commun.
					<br />
					<br />
					Avant cela, nous nous engageons à tenter de trouver une solution
					amiable à notre différend.
				</p>
			</div>
		</div>
	);
}
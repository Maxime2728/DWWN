-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 07 juin 2022 à 16:37
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `menuiz`
--
CREATE DATABASE IF NOT EXISTS `menuiz` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `menuiz`;

-- --------------------------------------------------------

--
-- Structure de la table `t_d_address_adr`
--

DROP TABLE IF EXISTS `t_d_address_adr`;
CREATE TABLE `t_d_address_adr` (
  `ADR_ID` int(11) NOT NULL,
  `ADR_FIRSTNAME` varchar(1024) NOT NULL,
  `ADR_LASTNAME` varchar(1024) NOT NULL,
  `ADR_LINE1` varchar(1024) NOT NULL,
  `ADR_LINE2` varchar(1024) DEFAULT NULL,
  `ADR_LINE3` varchar(1024) DEFAULT NULL,
  `ADR_ZIPCODE` varchar(1024) NOT NULL,
  `ADR_CITY` varchar(1024) NOT NULL,
  `ADR_COUNTRY` varchar(1024) NOT NULL,
  `ADR_MAIL` varchar(1024) NOT NULL,
  `ADR_PHONE` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_address_adr`
--

INSERT INTO `t_d_address_adr` (`ADR_ID`, `ADR_FIRSTNAME`, `ADR_LASTNAME`, `ADR_LINE1`, `ADR_LINE2`, `ADR_LINE3`, `ADR_ZIPCODE`, `ADR_CITY`, `ADR_COUNTRY`, `ADR_MAIL`, `ADR_PHONE`) VALUES
(1, 'Maison', 'null', '32 Boulevard du Bois', NULL, NULL, '27952', 'Paname', 'France', 'uhrere@gmail.com', '0789635245'),
(2, 'Non renseignée', 'Non renseignée', 'Non renseignée', NULL, NULL, '00000', 'Non renseignée', 'Non renseignée', 'Non renseignée', 'Non renseignée'),
(3, 'Travail', 'null', '52 Rue du Trou Perdu', NULL, NULL, '59875', 'Dreux', 'France', 'iyhgvr@gmail.com', '0654865946'),
(4, 'La Casa', 'De Papel', '56 Allée des Michons', NULL, NULL, '95876', 'Evry', 'France', 'ihgrezisqgv', '0698569658'),
(5, 'El Chapo', 'Guzman', '263 Boulevard des Jonquilles', NULL, NULL, '65896', 'Guzman Caillé', 'Mexico', 'El Famoso', '0685978659'),
(6, 'Franckie', 'CBon', '56 Allée des Passants', NULL, NULL, '33454', 'Marseille', 'France', 'Oui', '0654789325');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_expeditiontype_ety`
--

DROP TABLE IF EXISTS `t_d_expeditiontype_ety`;
CREATE TABLE `t_d_expeditiontype_ety` (
  `ETY_ID` int(11) NOT NULL,
  `ETY_WORDING` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_expeditiontype_ety`
--

INSERT INTO `t_d_expeditiontype_ety` (`ETY_ID`, `ETY_WORDING`) VALUES
(1, 'Collisimo'),
(2, 'Chronopost'),
(3, 'Transporteur Interne');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_expedition_exp`
--

DROP TABLE IF EXISTS `t_d_expedition_exp`;
CREATE TABLE `t_d_expedition_exp` (
  `EXP_ID` int(11) NOT NULL,
  `EXP_WEIGTH` decimal(8,2) DEFAULT NULL,
  `EXP_TRACKINGNUMBER` varchar(1024) DEFAULT NULL,
  `EXP_SENTDATE` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_expedition_exp`
--

INSERT INTO `t_d_expedition_exp` (`EXP_ID`, `EXP_WEIGTH`, `EXP_TRACKINGNUMBER`, `EXP_SENTDATE`) VALUES
(1, '0.00', 'NaN', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_orderdetails_odt`
--

DROP TABLE IF EXISTS `t_d_orderdetails_odt`;
CREATE TABLE `t_d_orderdetails_odt` (
  `OHR_ID` int(11) NOT NULL,
  `PRD_ID` int(11) NOT NULL,
  `EXP_ID` int(11) NOT NULL,
  `ODT_QUANTITY` int(11) NOT NULL,
  `ODT_ISCANCELED` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `t_d_orderheader_ohr`
--

DROP TABLE IF EXISTS `t_d_orderheader_ohr`;
CREATE TABLE `t_d_orderheader_ohr` (
  `OHR_ID` int(11) NOT NULL,
  `ADR_ID_LIV` int(11) NOT NULL,
  `ADR_ID_FAC` int(11) NOT NULL,
  `PMT_ID` int(11) NOT NULL,
  `OSS_ID` int(11) NOT NULL,
  `ETY_ID` int(11) NOT NULL,
  `USR_ID` int(11) NOT NULL,
  `OHR_NUMBER` varchar(1024) NOT NULL,
  `OHR_DATE` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_orderheader_ohr`
--

INSERT INTO `t_d_orderheader_ohr` (`OHR_ID`, `ADR_ID_LIV`, `ADR_ID_FAC`, `PMT_ID`, `OSS_ID`, `ETY_ID`, `USR_ID`, `OHR_NUMBER`, `OHR_DATE`) VALUES
(1, 4, 5, 5, 1, 3, 2, '568556', '2022-06-07 13:29:41'),
(2, 6, 5, 3, 4, 2, 3, '43154652', '2022-06-07 14:24:54'),
(3, 2, 3, 4, 2, 1, 1, '51545611', '2022-06-07 14:26:08'),
(4, 1, 1, 2, 1, 2, 1, '54856486', '2022-06-07 14:23:37'),
(5, 3, 3, 4, 3, 3, 2, '71289456', '2022-06-07 14:23:37'),
(6, 4, 4, 1, 2, 1, 3, '9879812', '2022-06-07 14:23:37');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_orderstatus_oss`
--

DROP TABLE IF EXISTS `t_d_orderstatus_oss`;
CREATE TABLE `t_d_orderstatus_oss` (
  `OSS_ID` int(11) NOT NULL,
  `OSS_WORDING` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_orderstatus_oss`
--

INSERT INTO `t_d_orderstatus_oss` (`OSS_ID`, `OSS_WORDING`) VALUES
(1, 'En cours'),
(2, 'Annulé'),
(3, 'Livré totalement'),
(4, 'Livré partiellement');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_paymenttype_pmt`
--

DROP TABLE IF EXISTS `t_d_paymenttype_pmt`;
CREATE TABLE `t_d_paymenttype_pmt` (
  `PMT_ID` int(11) NOT NULL,
  `PMT_WORDING` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_paymenttype_pmt`
--

INSERT INTO `t_d_paymenttype_pmt` (`PMT_ID`, `PMT_WORDING`) VALUES
(1, 'CB'),
(2, 'Espèces'),
(3, 'Virement'),
(4, 'Chèque'),
(5, 'PayPal');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_productkit_kit`
--

DROP TABLE IF EXISTS `t_d_productkit_kit`;
CREATE TABLE `t_d_productkit_kit` (
  `PRD_ID_KIT` int(11) NOT NULL,
  `PRD_ID_COMPONENT` int(11) NOT NULL,
  `KIT_QUANTITY` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_productkit_kit`
--

INSERT INTO `t_d_productkit_kit` (`PRD_ID_KIT`, `PRD_ID_COMPONENT`, `KIT_QUANTITY`) VALUES
(6, 2, 15),
(6, 3, 15),
(7, 3, 15),
(7, 4, 15),
(8, 4, 15),
(8, 9, 15);

-- --------------------------------------------------------

--
-- Structure de la table `t_d_producttype_pty`
--

DROP TABLE IF EXISTS `t_d_producttype_pty`;
CREATE TABLE `t_d_producttype_pty` (
  `PTY_ID` int(11) NOT NULL,
  `PTY_DESCRIPTION` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_producttype_pty`
--

INSERT INTO `t_d_producttype_pty` (`PTY_ID`, `PTY_DESCRIPTION`) VALUES
(1, 'Kit'),
(2, 'Unitaire');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_product_prd`
--

DROP TABLE IF EXISTS `t_d_product_prd`;
CREATE TABLE `t_d_product_prd` (
  `PRD_ID` int(11) NOT NULL,
  `SPL_ID` int(11) NOT NULL,
  `PTY_ID` int(11) NOT NULL,
  `PRD_DESCRIPTION` varchar(1024) NOT NULL,
  `PRD_GUARANTEE` smallint(6) NOT NULL,
  `PRD_PICTURE` longblob DEFAULT NULL,
  `PRD_PRICE` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_product_prd`
--

INSERT INTO `t_d_product_prd` (`PRD_ID`, `SPL_ID`, `PTY_ID`, `PRD_DESCRIPTION`, `PRD_GUARANTEE`, `PRD_PICTURE`, `PRD_PRICE`) VALUES
(1, 1, 2, 'Planche en bois', 24, NULL, '10.30'),
(2, 2, 2, 'Plaque en métal', 32, NULL, '120.20'),
(3, 3, 2, 'Planche Pare-Feu', 24, NULL, '30.50'),
(4, 4, 2, 'Vitre', 12, NULL, '40.60'),
(5, 5, 2, 'Etanchéité toit', 24, NULL, '10.00'),
(6, 2, 1, '(KIT) Plaque en métal + Planche Pare-Feu', 32, NULL, '160.00'),
(7, 3, 1, '(KIT) Planche Pare-Feu + Vitre', 24, NULL, '85.00'),
(8, 4, 1, '(KIT) Vitre + Contours de fenêtre', 12, NULL, '200.00'),
(9, 1, 2, 'Contour de fenêtre', 24, NULL, '100.00');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_supplier_spl`
--

DROP TABLE IF EXISTS `t_d_supplier_spl`;
CREATE TABLE `t_d_supplier_spl` (
  `SPL_ID` int(11) NOT NULL,
  `SPL_NAME` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_supplier_spl`
--

INSERT INTO `t_d_supplier_spl` (`SPL_ID`, `SPL_NAME`) VALUES
(1, 'Bois 27'),
(2, 'Acier 27'),
(3, 'French wood'),
(4, 'Verre 27'),
(5, 'Toiture 27');

-- --------------------------------------------------------

--
-- Structure de la table `t_d_user_usr`
--

DROP TABLE IF EXISTS `t_d_user_usr`;
CREATE TABLE `t_d_user_usr` (
  `USR_ID` int(11) NOT NULL,
  `ADR_ID` int(11) DEFAULT NULL,
  `USR_MAIL` varchar(1024) NOT NULL,
  `USR_PASSWORD` varchar(1024) NOT NULL,
  `USR_FIRSTNAME` varchar(1024) NOT NULL,
  `USR_LASTNAME` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `t_d_user_usr`
--

INSERT INTO `t_d_user_usr` (`USR_ID`, `ADR_ID`, `USR_MAIL`, `USR_PASSWORD`, `USR_FIRSTNAME`, `USR_LASTNAME`) VALUES
(1, 2, 'ihgvehv@gmail.com', 'FranckDuboscq', 'Franck', 'Einshtein'),
(2, 2, 'hbhdsqvj@gmail.com', 'bzvhsbvhq', 'Max', 'La Menace'),
(3, 2, 'hfevhfsvqhv@gmail.com', 'brhsqfbnqj', 'Paul', 'Mirabel');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `t_d_address_adr`
--
ALTER TABLE `t_d_address_adr`
  ADD PRIMARY KEY (`ADR_ID`);

--
-- Index pour la table `t_d_expeditiontype_ety`
--
ALTER TABLE `t_d_expeditiontype_ety`
  ADD PRIMARY KEY (`ETY_ID`);

--
-- Index pour la table `t_d_expedition_exp`
--
ALTER TABLE `t_d_expedition_exp`
  ADD PRIMARY KEY (`EXP_ID`);

--
-- Index pour la table `t_d_orderdetails_odt`
--
ALTER TABLE `t_d_orderdetails_odt`
  ADD PRIMARY KEY (`OHR_ID`,`PRD_ID`,`EXP_ID`),
  ADD KEY `FK_CONCERNE2` (`PRD_ID`),
  ADD KEY `FK_CONCERNE3` (`EXP_ID`);

--
-- Index pour la table `t_d_orderheader_ohr`
--
ALTER TABLE `t_d_orderheader_ohr`
  ADD PRIMARY KEY (`OHR_ID`),
  ADD KEY `FK_A_POUR_PAIEMENT` (`PMT_ID`),
  ADD KEY `FK_A_POUR_STATUT` (`OSS_ID`),
  ADD KEY `FK_A_POUR_TYPE_EXPEDITION` (`ETY_ID`),
  ADD KEY `FK_COMMANDE` (`USR_ID`),
  ADD KEY `FK_EST_FACTURE` (`ADR_ID_FAC`),
  ADD KEY `FK_EST_LIVRE` (`ADR_ID_LIV`);

--
-- Index pour la table `t_d_orderstatus_oss`
--
ALTER TABLE `t_d_orderstatus_oss`
  ADD PRIMARY KEY (`OSS_ID`);

--
-- Index pour la table `t_d_paymenttype_pmt`
--
ALTER TABLE `t_d_paymenttype_pmt`
  ADD PRIMARY KEY (`PMT_ID`);

--
-- Index pour la table `t_d_productkit_kit`
--
ALTER TABLE `t_d_productkit_kit`
  ADD PRIMARY KEY (`PRD_ID_KIT`,`PRD_ID_COMPONENT`),
  ADD KEY `FK_T_D_PROD_SE_COMPOS_T_D_PROD2` (`PRD_ID_COMPONENT`);

--
-- Index pour la table `t_d_producttype_pty`
--
ALTER TABLE `t_d_producttype_pty`
  ADD PRIMARY KEY (`PTY_ID`);

--
-- Index pour la table `t_d_product_prd`
--
ALTER TABLE `t_d_product_prd`
  ADD PRIMARY KEY (`PRD_ID`),
  ADD KEY `FK_EST_DE_TYPE` (`PTY_ID`),
  ADD KEY `FK_PROVIENT_DE` (`SPL_ID`);

--
-- Index pour la table `t_d_supplier_spl`
--
ALTER TABLE `t_d_supplier_spl`
  ADD PRIMARY KEY (`SPL_ID`);

--
-- Index pour la table `t_d_user_usr`
--
ALTER TABLE `t_d_user_usr`
  ADD PRIMARY KEY (`USR_ID`),
  ADD KEY `FK_T_D_USER_A_COMME_I_T_D_ADDR3` (`ADR_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `t_d_address_adr`
--
ALTER TABLE `t_d_address_adr`
  MODIFY `ADR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `t_d_expeditiontype_ety`
--
ALTER TABLE `t_d_expeditiontype_ety`
  MODIFY `ETY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `t_d_expedition_exp`
--
ALTER TABLE `t_d_expedition_exp`
  MODIFY `EXP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `t_d_orderdetails_odt`
--
ALTER TABLE `t_d_orderdetails_odt`
  MODIFY `OHR_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `t_d_orderheader_ohr`
--
ALTER TABLE `t_d_orderheader_ohr`
  MODIFY `OHR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `t_d_orderstatus_oss`
--
ALTER TABLE `t_d_orderstatus_oss`
  MODIFY `OSS_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `t_d_paymenttype_pmt`
--
ALTER TABLE `t_d_paymenttype_pmt`
  MODIFY `PMT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `t_d_productkit_kit`
--
ALTER TABLE `t_d_productkit_kit`
  MODIFY `PRD_ID_KIT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `t_d_producttype_pty`
--
ALTER TABLE `t_d_producttype_pty`
  MODIFY `PTY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `t_d_product_prd`
--
ALTER TABLE `t_d_product_prd`
  MODIFY `PRD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `t_d_supplier_spl`
--
ALTER TABLE `t_d_supplier_spl`
  MODIFY `SPL_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `t_d_user_usr`
--
ALTER TABLE `t_d_user_usr`
  MODIFY `USR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `t_d_orderdetails_odt`
--
ALTER TABLE `t_d_orderdetails_odt`
  ADD CONSTRAINT `FK_CONCERNE1` FOREIGN KEY (`OHR_ID`) REFERENCES `t_d_orderheader_ohr` (`OHR_ID`),
  ADD CONSTRAINT `FK_CONCERNE2` FOREIGN KEY (`PRD_ID`) REFERENCES `t_d_product_prd` (`PRD_ID`),
  ADD CONSTRAINT `FK_CONCERNE3` FOREIGN KEY (`EXP_ID`) REFERENCES `t_d_expedition_exp` (`EXP_ID`);

--
-- Contraintes pour la table `t_d_orderheader_ohr`
--
ALTER TABLE `t_d_orderheader_ohr`
  ADD CONSTRAINT `FK_A_POUR_PAIEMENT` FOREIGN KEY (`PMT_ID`) REFERENCES `t_d_paymenttype_pmt` (`PMT_ID`),
  ADD CONSTRAINT `FK_A_POUR_STATUT` FOREIGN KEY (`OSS_ID`) REFERENCES `t_d_orderstatus_oss` (`OSS_ID`),
  ADD CONSTRAINT `FK_A_POUR_TYPE_EXPEDITION` FOREIGN KEY (`ETY_ID`) REFERENCES `t_d_expeditiontype_ety` (`ETY_ID`),
  ADD CONSTRAINT `FK_COMMANDE` FOREIGN KEY (`USR_ID`) REFERENCES `t_d_user_usr` (`USR_ID`),
  ADD CONSTRAINT `FK_EST_FACTURE` FOREIGN KEY (`ADR_ID_FAC`) REFERENCES `t_d_address_adr` (`ADR_ID`),
  ADD CONSTRAINT `FK_EST_LIVRE` FOREIGN KEY (`ADR_ID_LIV`) REFERENCES `t_d_address_adr` (`ADR_ID`);

--
-- Contraintes pour la table `t_d_productkit_kit`
--
ALTER TABLE `t_d_productkit_kit`
  ADD CONSTRAINT `FK_SE_COMPOSE` FOREIGN KEY (`PRD_ID_KIT`) REFERENCES `t_d_product_prd` (`PRD_ID`),
  ADD CONSTRAINT `FK_T_D_PROD_SE_COMPOS_T_D_PROD2` FOREIGN KEY (`PRD_ID_COMPONENT`) REFERENCES `t_d_product_prd` (`PRD_ID`);

--
-- Contraintes pour la table `t_d_product_prd`
--
ALTER TABLE `t_d_product_prd`
  ADD CONSTRAINT `FK_EST_DE_TYPE` FOREIGN KEY (`PTY_ID`) REFERENCES `t_d_producttype_pty` (`PTY_ID`),
  ADD CONSTRAINT `FK_PROVIENT_DE` FOREIGN KEY (`SPL_ID`) REFERENCES `t_d_supplier_spl` (`SPL_ID`);

--
-- Contraintes pour la table `t_d_user_usr`
--
ALTER TABLE `t_d_user_usr`
  ADD CONSTRAINT `FK_T_D_USER_A_COMME_I_T_D_ADDR3` FOREIGN KEY (`ADR_ID`) REFERENCES `t_d_address_adr` (`ADR_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

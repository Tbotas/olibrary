#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: user
#------------------------------------------------------------

CREATE TABLE user(
        id_user    Int NOT NULL ,
        username   Varchar (255) ,
        first_name Varchar (55) NOT NULL ,
        last_name  Varchar (55) ,
        password   Varchar (255) ,
        email      Varchar (90) NOT NULL ,
        rank       Int ,
        PRIMARY KEY (id_user ) ,
        UNIQUE (email )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: author
#------------------------------------------------------------

CREATE TABLE author(
        id_author  int (11) Auto_increment  NOT NULL ,
        first_name Varchar (55) ,
        last_name  Varchar (55) ,
        PRIMARY KEY (id_author )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: editor
#------------------------------------------------------------

CREATE TABLE editor(
        id_editor int (11) Auto_increment  NOT NULL ,
        name      Varchar (55) ,
        PRIMARY KEY (id_editor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: provider
#------------------------------------------------------------

CREATE TABLE provider(
        id_provider int (11) Auto_increment  NOT NULL ,
        name        Varchar (55) ,
        PRIMARY KEY (id_provider )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: collection
#------------------------------------------------------------

CREATE TABLE collection(
        id_collection int (11) Auto_increment  NOT NULL ,
        name          Varchar (55) ,
        id_editor     Int ,
        PRIMARY KEY (id_collection )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: notice
#------------------------------------------------------------

CREATE TABLE notice(
        id_notice        int (11) Auto_increment  NOT NULL ,
        publication_date Date ,
        quantity         Int ,
        description      Text ,
        date_added       Datetime ,
        id_category      Int ,
        id_author        Int ,
        id_collection    Int ,
        id_type          Int ,
        PRIMARY KEY (id_notice )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: category
#------------------------------------------------------------

CREATE TABLE category(
        id_category int (11) Auto_increment  NOT NULL ,
        name        Varchar (55) ,
        PRIMARY KEY (id_category )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: type
#------------------------------------------------------------

CREATE TABLE type(
        id_type int (11) Auto_increment  NOT NULL ,
        name    Varchar (55) ,
        PRIMARY KEY (id_type )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: provider_notice
#------------------------------------------------------------

CREATE TABLE provider_notice(
        id_notice   Int NOT NULL ,
        id_provider Int NOT NULL ,
        PRIMARY KEY (id_notice ,id_provider )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: borrow
#------------------------------------------------------------

CREATE TABLE borrow(
        id_borrow        int (11) Auto_increment  ,
        date_borrow      Datetime ,
        date_back        Datetime ,
        date_reservation Datetime ,
        duration         Int ,
        id_user          Int NOT NULL ,
        id_notice        Int NOT NULL ,
        PRIMARY KEY (id_user ,id_notice )
)ENGINE=InnoDB;

ALTER TABLE collection ADD CONSTRAINT FK_collection_id_editor FOREIGN KEY (id_editor) REFERENCES editor(id_editor);
ALTER TABLE notice ADD CONSTRAINT FK_notice_id_category FOREIGN KEY (id_category) REFERENCES category(id_category);
ALTER TABLE notice ADD CONSTRAINT FK_notice_id_author FOREIGN KEY (id_author) REFERENCES author(id_author);
ALTER TABLE notice ADD CONSTRAINT FK_notice_id_collection FOREIGN KEY (id_collection) REFERENCES collection(id_collection);
ALTER TABLE notice ADD CONSTRAINT FK_notice_id_type FOREIGN KEY (id_type) REFERENCES type(id_type);
ALTER TABLE provider_notice ADD CONSTRAINT FK_provider_notice_id_notice FOREIGN KEY (id_notice) REFERENCES notice(id_notice);
ALTER TABLE provider_notice ADD CONSTRAINT FK_provider_notice_id_provider FOREIGN KEY (id_provider) REFERENCES provider(id_provider);
ALTER TABLE borrow ADD CONSTRAINT FK_borrow_id_user FOREIGN KEY (id_user) REFERENCES user(id_user);
ALTER TABLE borrow ADD CONSTRAINT FK_borrow_id_notice FOREIGN KEY (id_notice) REFERENCES notice(id_notice);

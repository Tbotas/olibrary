 ---------------------------------------------------------------
 --        Script Oracle.  
 ---------------------------------------------------------------


------------------------------------------------------------
-- Table: user
------------------------------------------------------------
CREATE TABLE user(
	id_user     NUMBER(10,0)  NOT NULL  ,
	username    VARCHAR2 (255)  ,
	first_name  VARCHAR2 (55) NOT NULL  ,
	last_name   VARCHAR2 (55)  ,
	password    VARCHAR2 (255)  ,
	email       VARCHAR2 (90)NOT NULL  ,
	rank        NUMBER(10,0)   ,
	CONSTRAINT user_Pk PRIMARY KEY (id_user) ,
	CONSTRAINT user_Uniq UNIQUE (email)
);

------------------------------------------------------------
-- Table: author
------------------------------------------------------------
CREATE TABLE author(
	id_author   NUMBER NOT NULL ,
	first_name  VARCHAR2 (55)  ,
	last_name   VARCHAR2 (55)  ,
	CONSTRAINT author_Pk PRIMARY KEY (id_author)
);

------------------------------------------------------------
-- Table: editor
------------------------------------------------------------
CREATE TABLE editor(
	id_editor  NUMBER NOT NULL ,
	name       VARCHAR2 (55)  ,
	CONSTRAINT editor_Pk PRIMARY KEY (id_editor)
);

------------------------------------------------------------
-- Table: provider
------------------------------------------------------------
CREATE TABLE provider(
	id_provider  NUMBER NOT NULL ,
	name         VARCHAR2 (55)  ,
	CONSTRAINT provider_Pk PRIMARY KEY (id_provider)
);

------------------------------------------------------------
-- Table: collection
------------------------------------------------------------
CREATE TABLE collection(
	id_collection  NUMBER NOT NULL ,
	name           VARCHAR2 (55)  ,
	id_editor      NUMBER(10,0)   ,
	CONSTRAINT collection_Pk PRIMARY KEY (id_collection)
);

------------------------------------------------------------
-- Table: notice
------------------------------------------------------------
CREATE TABLE notice(
	id_notice         NUMBER NOT NULL ,
	publication_date  DATE   ,
	quantity          NUMBER(10,0)   ,
	description       CLOB   ,
	date_added        DATE   ,
	id_category       NUMBER(10,0)   ,
	id_author         NUMBER(10,0)   ,
	id_collection     NUMBER(10,0)   ,
	id_type           NUMBER(10,0)   ,
	CONSTRAINT notice_Pk PRIMARY KEY (id_notice)
);

------------------------------------------------------------
-- Table: category
------------------------------------------------------------
CREATE TABLE category(
	id_category  NUMBER NOT NULL ,
	name         VARCHAR2 (55)  ,
	CONSTRAINT category_Pk PRIMARY KEY (id_category)
);

------------------------------------------------------------
-- Table: type
------------------------------------------------------------
CREATE TABLE type(
	id_type  NUMBER NOT NULL ,
	name     VARCHAR2 (55)  ,
	CONSTRAINT type_Pk PRIMARY KEY (id_type)
);

------------------------------------------------------------
-- Table: provider_notice
------------------------------------------------------------
CREATE TABLE provider_notice(
	id_notice    NUMBER(10,0)  NOT NULL  ,
	id_provider  NUMBER(10,0)  NOT NULL  ,
	CONSTRAINT provider_notice_Pk PRIMARY KEY (id_notice,id_provider)
);

------------------------------------------------------------
-- Table: borrow
------------------------------------------------------------
CREATE TABLE borrow(
	id_borrow         NUMBER NOT NULL ,
	date_borrow       DATE   ,
	date_back         DATE   ,
	date_reservation  DATE   ,
	duration          NUMBER(10,0)   ,
	id_user           NUMBER(10,0)  NOT NULL  ,
	id_notice         NUMBER(10,0)  NOT NULL  ,
	CONSTRAINT borrow_Pk PRIMARY KEY (id_user,id_notice)
);




ALTER TABLE collection ADD FOREIGN KEY (id_editor) REFERENCES editor(id_editor);
ALTER TABLE notice ADD FOREIGN KEY (id_category) REFERENCES category(id_category);
ALTER TABLE notice ADD FOREIGN KEY (id_author) REFERENCES author(id_author);
ALTER TABLE notice ADD FOREIGN KEY (id_collection) REFERENCES collection(id_collection);
ALTER TABLE notice ADD FOREIGN KEY (id_type) REFERENCES type(id_type);
ALTER TABLE provider_notice ADD FOREIGN KEY (id_notice) REFERENCES notice(id_notice);
ALTER TABLE provider_notice ADD FOREIGN KEY (id_provider) REFERENCES provider(id_provider);
ALTER TABLE borrow ADD FOREIGN KEY (id_user) REFERENCES user(id_user);
ALTER TABLE borrow ADD FOREIGN KEY (id_notice) REFERENCES notice(id_notice);

CREATE SEQUENCE Seq_author_id_author START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_editor_id_editor START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_provider_id_provider START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_collection_id_collection START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_notice_id_notice START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_category_id_category START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_type_id_type START WITH 1 INCREMENT BY 1 NOCYCLE;
CREATE SEQUENCE Seq_borrow_id_borrow START WITH 1 INCREMENT BY 1 NOCYCLE;


CREATE OR REPLACE TRIGGER author_id_author
	BEFORE INSERT ON author 
  FOR EACH ROW 
	WHEN (NEW.id_author IS NULL) 
	BEGIN
		 select Seq_author_id_author.NEXTVAL INTO :NEW.id_author from DUAL; 
	END;
CREATE OR REPLACE TRIGGER editor_id_editor
	BEFORE INSERT ON editor 
  FOR EACH ROW 
	WHEN (NEW.id_editor IS NULL) 
	BEGIN
		 select Seq_editor_id_editor.NEXTVAL INTO :NEW.id_editor from DUAL; 
	END;
CREATE OR REPLACE TRIGGER provider_id_provider
	BEFORE INSERT ON provider 
  FOR EACH ROW 
	WHEN (NEW.id_provider IS NULL) 
	BEGIN
		 select Seq_provider_id_provider.NEXTVAL INTO :NEW.id_provider from DUAL; 
	END;
CREATE OR REPLACE TRIGGER collection_id_collection
	BEFORE INSERT ON collection 
  FOR EACH ROW 
	WHEN (NEW.id_collection IS NULL) 
	BEGIN
		 select Seq_collection_id_collection.NEXTVAL INTO :NEW.id_collection from DUAL; 
	END;
CREATE OR REPLACE TRIGGER notice_id_notice
	BEFORE INSERT ON notice 
  FOR EACH ROW 
	WHEN (NEW.id_notice IS NULL) 
	BEGIN
		 select Seq_notice_id_notice.NEXTVAL INTO :NEW.id_notice from DUAL; 
	END;
CREATE OR REPLACE TRIGGER category_id_category
	BEFORE INSERT ON category 
  FOR EACH ROW 
	WHEN (NEW.id_category IS NULL) 
	BEGIN
		 select Seq_category_id_category.NEXTVAL INTO :NEW.id_category from DUAL; 
	END;
CREATE OR REPLACE TRIGGER type_id_type
	BEFORE INSERT ON type 
  FOR EACH ROW 
	WHEN (NEW.id_type IS NULL) 
	BEGIN
		 select Seq_type_id_type.NEXTVAL INTO :NEW.id_type from DUAL; 
	END;
CREATE OR REPLACE TRIGGER borrow_id_borrow
	BEFORE INSERT ON borrow 
  FOR EACH ROW 
	WHEN (NEW.id_borrow IS NULL) 
	BEGIN
		 select Seq_borrow_id_borrow.NEXTVAL INTO :NEW.id_borrow from DUAL; 
	END;


-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.department
(
    dept_id integer NOT NULL DEFAULT nextval('department_dept_id_seq'::regclass),
    dept_name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT department_pkey PRIMARY KEY (dept_id)
);

CREATE TABLE IF NOT EXISTS public.employee
(
    id integer NOT NULL DEFAULT nextval('employee_id_seq'::regclass),
    email character varying(255) COLLATE pg_catalog."default",
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    roles character varying(255) COLLATE pg_catalog."default",
    dept_id integer,
    CONSTRAINT employee_pkey PRIMARY KEY (id),
    CONSTRAINT uk_fopic1oh5oln2khj8eat6ino0 UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.employee_details
(
    emp_md_id integer NOT NULL DEFAULT nextval('employee_details_emp_md_id_seq'::regclass),
    contact_details character varying(255) COLLATE pg_catalog."default",
    date_of_birth timestamp(6) without time zone,
    designation character varying(255) COLLATE pg_catalog."default",
    gender character varying(255) COLLATE pg_catalog."default",
    joining_date timestamp(6) without time zone,
    salary integer,
    emp_id integer,
    CONSTRAINT employee_details_pkey PRIMARY KEY (emp_md_id)
);

CREATE TABLE IF NOT EXISTS public.employee_report
(
    report_id integer NOT NULL DEFAULT nextval('employee_report_report_id_seq'::regclass),
    report_status character varying(255) COLLATE pg_catalog."default",
    reporting_date character varying(255) COLLATE pg_catalog."default",
    work_done character varying(255) COLLATE pg_catalog."default",
    emp_id integer,
    feedback_id integer,
    CONSTRAINT employee_report_pkey PRIMARY KEY (report_id)
);

CREATE TABLE IF NOT EXISTS public.flyway_schema_history
(
    installed_rank integer NOT NULL,
    version character varying(50) COLLATE pg_catalog."default",
    description character varying(200) COLLATE pg_catalog."default" NOT NULL,
    type character varying(20) COLLATE pg_catalog."default" NOT NULL,
    script character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    checksum integer,
    installed_by character varying(100) COLLATE pg_catalog."default" NOT NULL,
    installed_on timestamp without time zone NOT NULL DEFAULT now(),
    execution_time integer NOT NULL,
    success boolean NOT NULL,
    CONSTRAINT flyway_schema_history_pk PRIMARY KEY (installed_rank)
);

CREATE TABLE IF NOT EXISTS public.mentor
(
    mentor_id integer NOT NULL,
    emp_id integer,
    CONSTRAINT mentor_pkey PRIMARY KEY (mentor_id)
);

CREATE TABLE IF NOT EXISTS public.mentor_feedback
(
    feedback_id integer NOT NULL DEFAULT nextval('mentor_feedback_feedback_id_seq'::regclass),
    feedback character varying(255) COLLATE pg_catalog."default",
    flag boolean,
    rating character varying(255) COLLATE pg_catalog."default",
    mentor_id integer,
    CONSTRAINT mentor_feedback_pkey PRIMARY KEY (feedback_id)
);

CREATE TABLE IF NOT EXISTS public.project
(
    project_id integer NOT NULL DEFAULT nextval('project_project_id_seq'::regclass),
    project_desc character varying(255) COLLATE pg_catalog."default",
    project_name character varying(255) COLLATE pg_catalog."default",
    status character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT project_pkey PRIMARY KEY (project_id)
);

CREATE TABLE IF NOT EXISTS public.project_employees
(
    projects_project_id integer NOT NULL,
    employees_id integer NOT NULL
);

ALTER TABLE IF EXISTS public.employee
    ADD CONSTRAINT fkaqchbcb8i6nvtl9g6c72yba0p FOREIGN KEY (dept_id)
    REFERENCES public.department (dept_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.employee_details
    ADD CONSTRAINT fkjwhhv402ja2w9ioxfbmbouv FOREIGN KEY (emp_id)
    REFERENCES public.employee (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.employee_report
    ADD CONSTRAINT fko8dibqhycvkhdvm0cpqawdot3 FOREIGN KEY (emp_id)
    REFERENCES public.employee (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.employee_report
    ADD CONSTRAINT fkr3twq5g3k8tv76f2rxh0ikigd FOREIGN KEY (feedback_id)
    REFERENCES public.mentor_feedback (feedback_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.mentor
    ADD CONSTRAINT fk5i7gh4hq4vparwjy6lpj0vwn2 FOREIGN KEY (emp_id)
    REFERENCES public.employee (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.mentor_feedback
    ADD CONSTRAINT fks9xkoec7on6iofux4d04i38ae FOREIGN KEY (mentor_id)
    REFERENCES public.mentor (mentor_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.project_employees
    ADD CONSTRAINT fk8pk8mb3xcpdyvhn5bnh9y3vhl FOREIGN KEY (projects_project_id)
    REFERENCES public.project (project_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.project_employees
    ADD CONSTRAINT fkgw0l9hs8f60yqoqshfjm0smte FOREIGN KEY (employees_id)
    REFERENCES public.employee (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;
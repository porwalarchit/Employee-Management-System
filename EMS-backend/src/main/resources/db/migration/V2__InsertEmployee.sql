INSERT INTO public.employee(
                           	id, email, first_name, last_name, password, roles, dept_id)
    VALUES (1, 'aporwal@argusoft.com', 'Archit', 'Porwal', '$2a$10$0EcD8ylytscGoT5FgCvS/OYX7RtHDKtuiHY8T8gUnXu1khrV7mk.q', 'ROLE_SUPERADMIN', 2),
     (2,'archit@gmail.com', 'Archit', 'Porwal', '$2a$10$WaTXosRc2gm4YB6.B5WuIOYAZ4WT8AA7K86.rfmWBL8QYN/DZOi7u', 'ROLE_ADMIN', 2),
     (3,'architporwal@gmail.com', 'Archit', 'Porwal', '$2a$10$zCYVCWF8kCY8JZIPBoppreyAiju/vSqoLyVDgacnHiLHUUYvLX0G2', 'ROLE_EMPLOYEE', 2);
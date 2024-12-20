import { IUser, IUserDTO } from './user.types';
import pool from '../config/database';

export const findAll = async (): Promise<IUser[]> => {
    const { rows } = await pool.query("SELECT * FROM public.user");
    console.log(rows);
    return rows;
}

export const findOne = async (id: number): Promise<IUser> => {
    const { rows } = await pool.query("SELECT * FROM public.user WHERE id = $1", [id]);
    return rows[0];
}

export const create = async (userDTO: IUserDTO): Promise<any> => {
    const { username, password } = userDTO;
    const { rows } = await pool.query("INSERT INTO public.user (username, password) VALUES ($1, $2) RETURNING *", [username, password]);

    return rows[0];
}

export const update = async (id: number, userDTO: IUserDTO): Promise<any> => {
    const { username, password } = userDTO;
    const { rows } = await pool.query("UPDATE public.user SET username = $1, password = $2 WHERE id = $3 RETURNING *", [username, password, id]);
    return rows;
}

export const remove = async (id: number): Promise<void> => {
    await pool.query("DELETE FROM public.user WHERE id = $1", [id]);
}
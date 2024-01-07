"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import HeroPicture from "../HeroPicture";

import styles from "./heroesList.module.scss";

import { IHeroData } from "@/interfaces/heroes";
import { spidermanFont } from "@/fonts";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <motion.h1
        className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        personagens
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/hero/${hero.id}`}>
              <HeroPicture hero={hero} />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}

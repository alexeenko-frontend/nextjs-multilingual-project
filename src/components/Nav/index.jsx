import React from "react";
import Link from "next/link";
import useTranslation from "locale/useTranslation";
import LocaleSwitcher from "../LocaleSwitcher";
import "./index.css";

const Navigation = () => {
  const { locale, t } = useTranslation();

  return (
    <ul styleName="nav">
      <li>
        <LocaleSwitcher />
      </li>
      <li>
        <Link href="/[lang]" as={`/${locale}`}>
          <a>{t("home")}</a>
        </Link>
      </li>
      <li>
        <Link href="/[lang]/user" as={`/${locale}/user`}>
          <a>{t("user")}</a>
        </Link>
      </li>
      <li>
        <Link href="/[lang]/user/[id]" as={`/${locale}/user/${1}`}>
          <a>{t("userId")}</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

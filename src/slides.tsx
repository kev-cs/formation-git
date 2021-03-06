import * as React from "react";
import { CSSProperties, FunctionComponent } from "react";

const doItGoogleImgSearch =
  "https://www.google.com/search?q=do+it&rlz=1C1SQJL_enCA888CA888&sxsrf=ALeKk01R1aJZjGeFoyBcq5VKBdJkl197dQ:1583202513311&source=lnms&tbm=isch&sa=X&ved=2ahUKEwidh6f7oP3nAhUBzIUKHcG3C0UQ_AUoAXoECA4QAw&biw=2560&bih=979";

const nextStepClass = "fragment fade-left";
const nextSemiFadeClass = "fragment fade-in-then-semi-out";

const whatIsGitSlideId = "what-is-git";
const howGitWorksSlideId = "how-git-works";
const mergeAndRebaseSlideId = "merge-and-rebase";

const inlineCodeStyle: CSSProperties = {
  fontWeight: "bold",
  backgroundColor: "rgba(255,103,52,0.67)",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.2rem"
};

export default () => (
  <>
    <section>
      <img
        style={{ border: "none", padding: "2rem" }}
        width="240"
        // height="238"
        data-src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        alt="Git logo"
      />
      <h1>Formation git</h1>
      <h2>Partie 1</h2>
    </section>
    <section>
      <h2>Agenda</h2>
      <ol>
        <li className={nextStepClass}>
          <a href={`#/${whatIsGitSlideId}`}>Qu'est-ce que Git</a>
        </li>
        <li className={nextStepClass}>
          <a href={`#/${howGitWorksSlideId}`}>Comment fonctionne Git</a>
        </li>
        <li className={nextStepClass}>
          <a href={`#/${mergeAndRebaseSlideId}`}>Les merges et rebases</a>
        </li>
      </ol>
    </section>
    <section id={whatIsGitSlideId}>
      <section>
        <h2>Qu'est-ce que Git?</h2>
        <p className={nextStepClass}>
          C'est un gestionnaire de versions de sources distribué, créé en 2005,
          par <b>Linus Torvalds</b>.
        </p>
        <p className={nextStepClass}>
          Git se distingue par sa flexibilité, sa performance, ses
          fonctionnalités avancées, et sa
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
            "simplicité"
          </span>
          . C'est grâce à ces aspects qu'il est aujourd'hui le gestionnaire de
          sources <b>le plus populaire</b> chez les développeurs.
        </p>
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          (Allez sur{" "}
          <a href="https://en.wikipedia.org/wiki/Git#Adoption">wikipédia</a> si
          vous ne me croyez pas)
        </p>
      </section>
      <section>
        <p>
          >
          <a href="https://github.com/dictcp/awesome-git#repository-hosting">
            Des plateformes comme Github, Bitbucket, GitLab, AWS CodeCommit,
            Gogs...
          </a>
        </p>
        <p className={nextStepClass}>
          >
          <a href="https://github.com/dictcp/awesome-git#client">
            Des outils comme GitKraken, TortoiseGit, SourceTree...
          </a>
        </p>
        <p className={nextStepClass}>
          >
          <a href="https://github.com/stevemao/awesome-git-addons">
            Des tonnes d'extensions !
          </a>
        </p>
        <p style={{ fontStyle: "italic" }} className={nextStepClass}>
          À noter que Git peut être utilisé avec ou sans serveur, tout en
          conservant la plupart de ses fonctionnalités.
        </p>
        <h3 className={nextStepClass}>
          <a href="https://git-scm.com/ ">git-scm.com</a>
        </h3>
      </section>
      <section>
        <h3>Un conseil perso...</h3>
        <p className={nextStepClass}>
          Apprenez à l'utiliser en ligne de commande!
        </p>
        <p
          className="fragment fade-in-then-out grow"
          style={{ fontSize: "4rem" }}
        >
          <a href={doItGoogleImgSearch}>FAITES-LE</a>
        </p>
      </section>
      <section>
        <h3 style={{ textDecoration: "underline" }}>Pourquoi :</h3>
        <ul>
          <li className={nextSemiFadeClass}>
            Aide à comprendre son fonctionnement
          </li>
          <li className={nextSemiFadeClass}>
            C'est un outil d'organisation flexible qui mérite d'être bien
            exploité
          </li>
          <li className={nextSemiFadeClass}>
            Vous permettra de scripter votre travail
          </li>
          <li className={nextSemiFadeClass}>
            Si vous savez utiliser Git en ligne de commande, vous savez utiliser
            n'importe quel outil Git (bah, presque).
          </li>
          <li className={"fragment"}>
            Ça pourrait vous sauver votre vie{" "}
            <span className={nextStepClass}>de développeur</span>
          </li>
        </ul>
      </section>
    </section>
    <section id={howGitWorksSlideId}>
      <section>
        <h2>Comment fonctionne Git</h2>
      </section>
      <section>
        <h3>Avant de commencer</h3>
        <ul>
          <li className={nextStepClass}>
            Créez un dossier de travail pour la formation
            <ul>
              <li>"formation-git"</li>
            </ul>
          </li>
          <li className={nextStepClass}>
            Dans celui-ci, créez un dossier "git-repo-dummy"
          </li>
          <li className={nextStepClass}>
            En ligne de commande, allez dans le répertoire et faites la commande
            suivante :
            <p style={{ textAlign: "center" }}>
              <code style={inlineCodeStyle}>git init</code>
            </p>
          </li>
          <li className={nextStepClass}>
            Et ensuite :
            <p style={{ textAlign: "center" }}>
              <code style={inlineCodeStyle}>git status</code>
            </p>
          </li>
        </ul>
      </section>
      <section>
        <p>Si tout est bon, vous devriez avoir ce message :</p>
        <pre>
          <code className={"plaintext"}>
            On branch master {"\n\n"}No commits yet {"\n\n"}nothing to commit
            (create/copy files and use "git add" to track)
          </code>
        </pre>
      </section>
      {/*
        - commits, branches, remotes
        - branches locales/remote
        - config? (local, global, system)
        */}
      <section>
        <h3>La base : les commits</h3>
        <img
          width={"50%"}
          src="assets/commit.svg"
          alt="commit diagram"
          style={{ border: "none" }}
        />
        <p className={nextStepClass}>
          Ils représentent le contenu d'un repository (dossier) à un moment
          précis dans le temps.
        </p>
      </section>
      <section>
        <div>
          <img
            width={"50%"}
            src="assets/commit.svg"
            alt="commit diagram"
            style={{
              border: "none",
              display: "inline-block",
              verticalAlign: "middle"
            }}
          />
          <div
            style={{
              display: "inline-block",
              width: "50%",
              verticalAlign: "middle"
            }}
          >
            <ul>
              <li className={nextStepClass}>
                <b>tree</b> : arbre des objets (fichiers et dossiers)
              </li>
              <li className={nextStepClass}>
                <b>parent</b>: id du commit <b>précédent</b>. Est null pour le
                premier commit d'une branche.
              </li>
              <li className={nextStepClass}>
                Les commits sont <b>immuables</b>
                <span className="fragment">
                  , c'est-à-dire, un # pointe toujours vers le même code.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          Mais comment en créer un?
        </p>
      </section>
      <section>
        <h3>Processus pour créer un commit</h3>
        <img
          src="assets/git-staging-area.png"
          alt="staging-area-commit"
          width="50%"
        />
        <p style={{ fontStyle: "italic" }} className={nextStepClass}>
          À vos claviers!
        </p>
        <p className={nextStepClass}>
          <a href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">
            Git Basics - Recording Changes to the Repository
          </a>
        </p>
      </section>
      <section>
        <h3>En résumé</h3>
        <ol style={{ fontSize: "xx-large" }}>
          <li className={nextSemiFadeClass}>
            Faire des modifications
            <ul style={{ listStyleType: "none", fontStyle: "italic" }}>
              <li>
                -> celles-ci se retrouvent dans le <b>Working Directory</b>
              </li>
            </ul>
          </li>
          <li className={nextSemiFadeClass}>
            <code style={inlineCodeStyle}>git add [fichiers]</code> pour
            indiquer les modifications que vous voulez commiter
            <ul style={{ listStyleType: "none", fontStyle: "italic" }}>
              <li>
                -> celles-ci ce retrouvent dans le <b>Staging Area</b> (aussi
                appelé <b>Index</b>)
              </li>
            </ul>
          </li>
          <li className={nextSemiFadeClass}>
            <code style={inlineCodeStyle}>git commit</code> pour créer un commit
            contenant les modifications situées dans le <b>Staging Area</b>.
            <ul style={{ listStyleType: "none", fontStyle: "italic" }}>
              <li>
                -> Vos modifications se retrouvent dans{" "}
                <b>votre repository local</b>
              </li>
            </ul>
          </li>
          <li className={nextSemiFadeClass}>
            <code style={inlineCodeStyle}>git push</code> pour pousser votre
            commit au serveur
            <ul style={{ listStyleType: "none", fontStyle: "italic" }}>
              <li>
                -> Vos modifications se retrouvent maintenant{" "}
                <b>dans le serveur</b>.
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h4>Si vous passez à travers ces étapes, vous aurez :</h4>
        <img
          style={{ border: "none" }}
          src="assets/multiple-commits.svg"
          alt="multiple-commits"
        />
      </section>
      <section>
        <p>Par contre, en réalité...</p>
        <img
          style={{ border: "none" }}
          src="assets/multiple-commits-reality.svg"
          alt="multiple-commits"
        />
      </section>
      <section>
        <h3>Les branches</h3>
        <p>
          <span className={nextSemiFadeClass}>
            Que sont elles? <br />
          </span>
          <span className={nextStepClass}>
            Une référence vers un commit, <b>c'est tout</b>.
          </span>
        </p>
      </section>
      <section>
        <img
          style={{ border: "none" }}
          src="assets/branch-with-commits.svg"
          alt="multiple-commits"
        />
      </section>
      <section>
        <ul>
          <li>
            <code style={inlineCodeStyle}>
              git checkout &lt;nom de la branche&gt;
            </code>
            <p>> changer de branche</p>
          </li>
          <li>
            <code style={inlineCodeStyle}>
              git checkout -b &lt;nom de la branche&gt;
            </code>
            <p>> créer une branche</p>
          </li>
          <li>
            <code style={inlineCodeStyle}>git branch [-v/-a/-r] -b</code>
            <p>> afficher les branches existantes</p>
          </li>
        </ul>
        <p className={nextStepClass}>
          Note : votre branche courante est la branche <b>"checked out"</b>
        </p>
      </section>
      <section>
        <h2>En cas de problème</h2>
        <div className={nextStepClass}>
          <h3>Avant de s'énerver, toujours faire :</h3>
          <code style={inlineCodeStyle}>git status</code>
        </div>
        <p className={nextSemiFadeClass}>et lire ce qu'il s'affiche.</p>
        <p className={nextSemiFadeClass}>Si ça ne corrige pas le problème,</p>
        <p className="fragment fade-in-then-out grow">relisez!</p>
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          (ou assistez à la deuxième partie)
        </p>
      </section>
    </section>
    <section id={mergeAndRebaseSlideId}>
      <section>
        <h2>Les merges et rebases</h2>
        <q>To merge or to rebase, that is the question.</q>
        <p>
          <span className={nextSemiFadeClass}>- William Shakespeare </span>
          <span className={nextStepClass}>
            ... n'a probablement pas dit ça.
          </span>
        </p>
      </section>
      <section>
        <h3>Que faire?</h3>
        <img
          style={{ border: "none" }}
          src="assets/merge-or-rebase.svg"
          alt="merge-or-rebase"
        />
      </section>
      <section>
        <h3>Une vue plus propre</h3>
        <img
          style={{ border: "none" }}
          src="assets/merge-or-rebase-clean.svg"
          alt="merge-or-rebase-clean"
        />
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          Notez que les branches ont <b>divergé</b>. Donc, elles sont{" "}
          <b>désynchronisées</b>.
        </p>
      </section>
      <section>
        <h3>Si on fait directement un merge</h3>
        <img style={{ border: "none" }} src="assets/merge.svg" alt="merge" />
      </section>
      <section>
        <h3>Si on fait un rebase en premier</h3>
        <img style={{ border: "none" }} src="assets/rebase.svg" alt="rebase" />
      </section>
      <section>
        <h3>Résultat du rebase</h3>
        <img
          style={{ border: "none" }}
          src="assets/rebase-result.svg"
          alt="rebase-result"
        />
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          Notez que les branches ont maintenant le <b>même historique</b>. Elles
          sont donc <b>synchronisées</b>.
        </p>
        <p style={{ fontStyle: "italic" }}>
          <span className={nextStepClass}>
            Comme deux personnes sur un même chemin.
          </span>{" "}
          <span className={nextStepClass}>
            Elles ne <b>divergeront jamais</b>... Ah que c'est poétique!
          </span>
        </p>
      </section>
      <section>
        <h3>Maintenant, si on merge</h3>
        <img
          style={{ border: "none" }}
          src="assets/rebase-then-merge.svg"
          alt="rebase-then-merge"
        />
        <p className={nextStepClass} style={{ fontStyle: "italic" }}>
          Notez que l'historique de master est <b>linéaire</b> (comparé au
          merge).
        </p>
      </section>

      <section>
        <h3>En résumé</h3>
        <ul>
          <li className={nextStepClass}>
            Les merges <b>fusionnent</b> des branches en{" "}
            <b>créant un nouveau commit</b> contenant ce qu'il faut pour la
            fusion
          </li>
          <li className={nextStepClass}>
            Les rebases "reconstruisent" l'historique d'une branche en se fiant
            sur une <b>branche source</b>
          </li>
          {/* TODO place correctly*/}
          <ul className={nextStepClass}>
            <li>
              <code style={inlineCodeStyle}>
                git rebase &lt;branche source&gt;
              </code>
            </li>
          </ul>
        </ul>
      </section>
      <section>
        <h3>Détails important</h3>
        <p className={nextStepClass}>
          Les merges des branches qui n'ont pas la même historique produisent
          des <b>merge-commits</b>
        </p>
        <p className={nextStepClass}>
          Les merges de branches qui ont subi un rebase{" "}
          <b>ne produisent pas de merge-commits</b>
        </p>
        <p className={nextStepClass}>
          <b>Les pull requests produisent toujours des merge-commits</b> pour
          faire de l'audit. Par contre, les merges des branches synchronisées
          produisent des petits merge-commits. De plus,{" "}
          <b>l'historique reste linéaire</b>.
        </p>
      </section>
      <section>
        <h3>Et juste pour vous</h3>{" "}
        <p className={nextStepClass}>
          Les commandes d'opérations travaillent sur la branche courante
          (checked-out)!
        </p>
      </section>
    </section>

    <section>
      <p>
        <b>Fin de la partie 1 !</b>
      </p>
    </section>
  </>
);

import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  // /blog/category/[id]
  // const { id } = params;

  const posts = mock;

  return { posts };
}

/**
 * @typedef {{
 *  id: string,
 *  title: string,
 *  description: string,
 *  created_at: string,
 *  num_of_views: number,
 *  num_of_comments: number,
 * }[]} Posts
 */
const mock = [
  {
    id: "e6744d0a-5f7b-4472-8808-3b48bc897152",
    title:
      "Cribro celo cohors voluptates amicitia vinum varietas voluntarius laborum. Atque tamisium celo aro conspergo studio acies subito. Adeptio tergum despecto incidunt spes accommodo delibero capio.",
    description:
      "Patruus earum adfero. Minus comprehendo patria ager thalassinus asperiores abundans. Ex tertius laboriosam paulatim cunabula sint.",
    created_at: "2024/11/29",
    num_of_views: 5326824008184927,
    num_of_comments: 683137041442133,
  },
  {
    id: "77ba4b3b-4095-4116-9cd6-671ab170a5a5",
    title:
      "Trans bellicus totidem cunctatio. Corrigo vehemens asper defetiscor aliquid vos occaecati strues cohaero. Amplitudo aggero pariatur sequi sponte illo cubitum cedo debitis.",
    description:
      "Blandior optio triduana alienus admitto. Animi valens aegrotatio pecto antea addo theca acquiro ascisco subseco. Pariatur assumenda aduro sum claustrum volo.",
    created_at: "2025/8/27",
    num_of_views: 1426509166805349,
    num_of_comments: 6435653134328457,
  },
  {
    id: "539cce09-8a29-4647-9ad6-3e884a4eed3b",
    title:
      "Bonus verecundia animadverto deserunt. Nisi curia uredo degenero vicissitudo. Turbo aequus pax velociter dolore.",
    description:
      "Beatae ab amicitia conturbo comitatus colligo fuga viduo. Umerus consuasor atrocitas curvo maiores est. Aurum verus advoco curtus ipsam tricesimus tergum bos iure.",
    created_at: "2025/8/22",
    num_of_views: 1051083683987567,
    num_of_comments: 6849110238336289,
  },
  {
    id: "6c69001c-40dc-43a6-8fd1-690d5669ed59",
    title:
      "Cupiditate agnitio suscipio. Vetus denique acidus ultio turbo. Vis beatae custodia tutis.",
    description:
      "Aestus cado beatae somnus. Aegrotatio caveo non demonstro aureus nostrum xiphias. Similique maxime autem vociferor maxime clam carmen illo attero.",
    created_at: "2025/3/27",
    num_of_views: 3481647368216955,
    num_of_comments: 3179973330303230,
  },
  {
    id: "27c8328e-d7b0-41de-991f-a877c081c66d",
    title:
      "Candidus magni nemo tenetur defleo contego conduco demo. Barba cibus auxilium. Curriculum ventus spectaculum volo termes.",
    description:
      "Alii tantillus calco utrimque carmen demens vergo. Vilitas adamo sodalitas tres voluptatum vado abduco decretum. Temeritas ademptio tempore aspicio creta alioqui tubineus speciosus ut.",
    created_at: "2025/8/8",
    num_of_views: 6121273767611320,
    num_of_comments: 2783919859546154,
  },
  {
    id: "fa758e2c-bfd6-4b18-9151-76e5583fe979",
    title:
      "Animi voluptate ter amplitudo cruentus terra adamo casus. Accusamus aro patior video celo. Decor claustrum desolo consequuntur.",
    description:
      "Tego aqua colo. Auditor utique delectus terga virga. Synagoga acer delibero venio.",
    created_at: "2025/2/28",
    num_of_views: 7124928140448829,
    num_of_comments: 1573554536887237,
  },
  {
    id: "59bd9c7e-0d89-4e08-91a4-b0ea12ab3cc3",
    title:
      "Contego agnosco ulciscor vomito cognomen caelum. Terga supellex testimonium cultura amoveo arbor occaecati similique crastinus comis. Vesper aestus ustulo.",
    description:
      "Deripio statua appono. Ambitus cognatus admoveo venio vitiosus dapifer aduro angustus demum vestigium. Animi iste magnam audax stella admitto harum.",
    created_at: "2025/5/30",
    num_of_views: 6410588674512641,
    num_of_comments: 842331760575557,
  },
  {
    id: "7cbbcb86-7890-4184-8a21-dac1c694328a",
    title:
      "Verbera amplitudo tenax viridis adulatio ustulo. Titulus cicuta quo. Cultura auctus aedificium nam decor tabella tolero.",
    description:
      "Vigor vilitas victus timor eligendi accusantium corrumpo tego. Acervus sonitus volva cupressus sit comis repellat. Solio debitis velut ustilo articulus inventore taceo textus.",
    created_at: "2025/1/31",
    num_of_views: 1829264624062327,
    num_of_comments: 3494726365937938,
  },
  {
    id: "9ba27670-e79e-439e-ba15-b5903527c7e7",
    title:
      "Deserunt decretum tripudio talus amiculum demulceo adficio sed. Minus cursus certus aggredior id. Eaque valde adsum.",
    description:
      "Blandior statim creptio defaeco decipio cultellus. Validus antiquus spargo consequuntur appono. Cornu cohors numquam audax.",
    created_at: "2025/5/24",
    num_of_views: 5597038279603890,
    num_of_comments: 7153016757398715,
  },
  {
    id: "13c64df6-e8aa-458e-a9e8-1c7402f81fb7",
    title:
      "Antea sol desparatus tamquam tonsor deleniti clam turpis reprehenderit. Vulgaris umbra solus. Votum supellex avarus sto eos.",
    description:
      "Ab tenuis sapiente thermae. Cuius civis ars perferendis cuppedia corrupti laborum vulgus tenax. Contabesco celo rerum cur urbanus chirographum.",
    created_at: "2025/7/1",
    num_of_views: 3711939930200573,
    num_of_comments: 48959319007094,
  },
  {
    id: "f3bf67c2-188f-4ab3-a428-bf32c634376c",
    title:
      "Tristis adstringo amissio comis accusator sui nihil defetiscor veritas villa. Sequi pel comparo aer sopor aveho cetera credo. Cavus colligo arx attonbitus.",
    description:
      "Absum constans eius. Consequuntur absque claudeo apud accusator supplanto pauper. Convoco thymbra uredo.",
    created_at: "2025/10/2",
    num_of_views: 6526823867817866,
    num_of_comments: 4887015920839331,
  },
  {
    id: "124c8b45-57dc-476a-8b82-067e27ba85d9",
    title:
      "Vito tabernus dolores ullus tunc. Cariosus tergum amplus ascit cibus adeptio delicate. Perferendis tertius curso uxor.",
    description:
      "Assentator complectus varius abstergo terebro adfero valeo verumtamen dedecor demens. Crudelis vespillo comedo curso spoliatio bardus velum ullus. Thymbra celer iure adopto eos depono angelus conspergo.",
    created_at: "2025/11/18",
    num_of_views: 5938132805785346,
    num_of_comments: 4289730274040747,
  },
  {
    id: "b30826c2-a863-4791-83a9-58fd1a81ba19",
    title:
      "Ubi aranea adimpleo dicta cuius deorsum dolorum. Vix coruscus acceptus vestigium tego vivo. Odio ulciscor porro eligendi pauci tardus eveniet aduro abbas.",
    description:
      "Thalassinus delectus placeat vergo adfero voluptas sponte. Tero expedita synagoga vinculum vinculum volva tardus ventito verus video. Vilicus curia bestia speciosus vivo tonsor deorsum vulpes.",
    created_at: "2025/3/15",
    num_of_views: 4825269779300949,
    num_of_comments: 8643258879658204,
  },
  {
    id: "0edc89ca-6c58-407e-8a90-a966727d4361",
    title:
      "Vix via terror appello cogito. Ratione ascit statim. Asperiores adicio tredecim conduco coadunatio cernuus admitto delectatio.",
    description:
      "Pectus terra eos crepusculum nihil adfero tener amplus claro. Tempora sui aestivus tricesimus. Veritas admiratio decerno velum theatrum vestigium subnecto.",
    created_at: "2024/12/28",
    num_of_views: 865406317204330,
    num_of_comments: 2870972500119043,
  },
  {
    id: "981cd7b3-ea81-499b-b295-261b6af6c7d4",
    title:
      "Caveo laborum copiose. Cognomen comptus odit laudantium magnam coma. Validus ex bibo cornu attonbitus ciminatio curo.",
    description:
      "Vulnus valens barba cognatus solvo conicio exercitationem adiuvo doloremque tricesimus. Censura tener surgo turba. Cruciamentum absconditus bene.",
    created_at: "2025/4/23",
    num_of_views: 1234575035130715,
    num_of_comments: 8917255983823710,
  },
  {
    id: "238b1943-684c-498f-96ea-1ca0754c2c7d",
    title:
      "Talis alias dedecor allatus vulticulus adopto accusator. Ager animus ventosus assumenda. Clarus asporto modi socius.",
    description:
      "Tumultus timidus aggredior. Aptus ciminatio delibero strenuus adamo defessus tenuis varius tribuo. Thymbra surculus distinctio cubo.",
    created_at: "2025/7/20",
    num_of_views: 2356750515885368,
    num_of_comments: 2252252781603901,
  },
  {
    id: "1cf6e32b-b7b7-44a3-ba2b-090216376129",
    title:
      "Accusator venustas eius cogo angustus suasoria. Balbus acceptus delibero vis laboriosam. Cunabula tres arto arcus adipiscor utrimque.",
    description:
      "Amita peior tertius vallum coniecto voluptate. Aro virga atrocitas apparatus adopto nobis patior. Vulgo culpo decerno tabella.",
    created_at: "2025/5/10",
    num_of_views: 782409056434409,
    num_of_comments: 8307139493056043,
  },
  {
    id: "b0e576cd-f7d8-4561-be15-be600c005f15",
    title:
      "Bellum calamitas volaticus reiciendis antea cohibeo. Carus atavus apud. Tempora textus cohors demonstro amitto toties speculum.",
    description:
      "Conforto arceo aliqua. Denuncio solium non. Quia textus placeat omnis complectus decerno.",
    created_at: "2025/2/9",
    num_of_views: 3201203684435444,
    num_of_comments: 8167930302030711,
  },
  {
    id: "7eb801cb-13be-450f-981b-a9406ec7459d",
    title:
      "Crinis tener comedo arceo ea clamo videlicet. Appositus aetas versus reprehenderit. Amo commodi ultio caterva sodalitas.",
    description:
      "Valde video universe adstringo nostrum adversus pauper confido nam defero. Utpote statim velut acies vado antea cernuus socius. Antea congregatio uredo cohaero caelestis.",
    created_at: "2025/4/12",
    num_of_views: 3136456589668531,
    num_of_comments: 8311993392548190,
  },
  {
    id: "145a4926-a2fd-4e22-b15a-fc645b01cef3",
    title:
      "Teres coniecto cimentarius defungo. Adipiscor creta cuppedia. Custodia debeo cresco adfectus vilitas deputo tunc aetas placeat conatus.",
    description:
      "Sonitus molestias defetiscor. Sunt atque concido. Pecco virga conscendo theca cenaculum triduana.",
    created_at: "2025/7/14",
    num_of_views: 4498325926743342,
    num_of_comments: 5482136829446775,
  },
];

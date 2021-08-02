import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="32" height="32" viewBox="0 0 32 32" className="mobile-icon">
<title>32х32</title>
<g>
  <path d="M15.97869,32A14.31394,14.31394,0,0,1,11.03634,4.22093c.35424-.12629.47065-.2665.43277-.64732A6.003,6.003,0,0,1,12.0601.413c.24059-.5176.50539-.54761.86287-.0962a14.29884,14.29884,0,0,0,1.19969,1.30869,6.43328,6.43328,0,0,0,3.99852,1.90133,13.04988,13.04988,0,0,1,6.65129,2.76565,2.38966,2.38966,0,0,0,2.10472.35835,14.00252,14.00252,0,0,0,2.35136-.71419c.53494-.22018.73978-.06533.688.51847a6.10945,6.10945,0,0,1-1.33263,3.43833.49682.49682,0,0,0-.065.67551,14.21839,14.21839,0,0,1-2.46514,17.38626A14.11717,14.11717,0,0,1,15.97869,32Z" fill="#49231a"/>
  <path d="M12.34871,7.1819a4.92213,4.92213,0,0,1,5.798,1.83092,7.237,7.237,0,0,1,.7873,1.4187c.24856.58991.31608.60871.90684.29375a4.70972,4.70972,0,0,1,4.398-.30326,5.54065,5.54065,0,0,1,2.919,3.66613,12.03273,12.03273,0,0,1-.43813,7.8283c-.085.23414-.16757.30218-.42412.19675-.38551-.15843-1.88582-.27367-4.12572.7804-1.78107.83815-3.0994,1.67234-4.348,2.2399-1.44935.6588-2.71382.78205-2.50342.92232a7.31957,7.31957,0,0,0,2.50342.79055c0,.46788-.98457,1.28137-2.41609,2.11076a7.68578,7.68578,0,0,1-3.14642,1.02719,5.86116,5.86116,0,0,1-3.13358-.63453c-.79457-.34067-4.33513-2.37854-3.68924-4.74332.29992-1.09812,2.89869-5.66563,2.63517-9.09136a7.752,7.752,0,0,1,.527-2.8987c.10764-1.106.48822-.67243.94283-1.68574a12.80936,12.80936,0,0,1,2.04682-3.1273A3.262,3.262,0,0,1,12.34871,7.1819Z" fill="#fae0c5"/>
  <path d="M29.1229,6.86971a4.98966,4.98966,0,0,1-1.39562,2.86314c-.1266.12227-.142.29219-.24611.41758a.92986.92986,0,0,0-.0737,1.29129,15.52172,15.52172,0,0,1,2.02624,5.253,7.19259,7.19259,0,0,1,.16911,1.34617c.02732.06268.10211-.0224.04262.00587-.025.01188-.046.002-.0409-.02557.06592-.35691-.22848-.73247.05555-1.07771a4.91,4.91,0,0,1-.07742,2.10184c-.01542.09495-.02748.19043-.0411.28567-.38181.48118-1.32358,2.52591-1.9696,2.50856a14.02809,14.02809,0,0,0,.77989-5.04381,9.67234,9.67234,0,0,0-1.54279-5.11561,5.30942,5.30942,0,0,0-4.15583-2.402,5.169,5.169,0,0,0-2.71341.58577c-.33349.17134-.4401.069-.57865-.21937a5.87364,5.87364,0,0,0-3.67932-3.27279,9.40729,9.40729,0,0,0-.962-.18885,3.45665,3.45665,0,0,0-1.06645-.03675c-.35765.01442-.43085-.13715-.36406-.44162.03147-.14351.06718-.28594.1-.42908A2.93,2.93,0,0,0,13.231,3.26977a1.2845,1.2845,0,0,1-.25182-.87327c.22259-.18932.32641.02637.41117.15072A5.21593,5.21593,0,0,0,17.35155,4.754a13.59767,13.59767,0,0,1,6.53806,2.54065,3.53121,3.53121,0,0,0,4.68848-.10832A1.28746,1.28746,0,0,1,29.1229,6.86971Z" fill="#82574b"/>
  <path d="M13.03927,2.33391a1.49946,1.49946,0,0,0,.28486.77552,3.16861,3.16861,0,0,1,.14625,2.4307c-.15954.544-.14353.53667.438.55418.27045.00814.55874-.09575.81147.08854a7.30269,7.30269,0,0,0-5.372,1.7806,11.90368,11.90368,0,0,0-3.78869,5.52582A1.45515,1.45515,0,0,1,4.57777,14.553a3.5125,3.5125,0,0,0-2.20021,1.99374,5.41157,5.41157,0,0,1,.20067-1.49,13.71253,13.71253,0,0,1,9.08266-10.268c.61683-.199.70449-.32652.56595-.96542A4.69845,4.69845,0,0,1,12.517,1.27256c.07336-.21735.127-.20444.22747-.02995C12.7735,1.62508,13.13885,1.9167,13.03927,2.33391Z" fill="#694138"/>
  <path d="M12.34871,7.1819a13.86214,13.86214,0,0,0-2.52919,3.47,19.74231,19.74231,0,0,0-1.6161,3.67736c-.13176,1.71286-.10712.56779-.6257.2056a2.78807,2.78807,0,0,0-1.22663-.32341c-.15087-.02173-.25822-.03477-.187-.23158C7.28073,10.89653,9.046,8.39514,12.2514,7.18349A.29506.29506,0,0,1,12.34871,7.1819Z" fill="#c5a992"/>
  <path d="M13.03927,2.33392c-.07673-.36959-.40965-.66995-.29481-1.0913a11.07966,11.07966,0,0,0,2.55228,2.22591,5.99881,5.99881,0,0,0,2.57893.73643,12.65037,12.65037,0,0,1,6.14592,2.46738,3.48913,3.48913,0,0,0,3.18809.65223c.50893-.1297,1.01856-.25082,1.51875-.41374.11667-.038.24885-.19123.39454-.0411a4.76792,4.76792,0,0,1-3.30914,1.40344,2.69221,2.69221,0,0,1-1.70825-.64805,12.72131,12.72131,0,0,0-4.76325-2.37721c-.90905-.19891-1.83511-.3187-2.74831-.50022A4.92557,4.92557,0,0,1,13.1887,2.45505C13.15705,2.40351,13.08988,2.3738,13.03927,2.33392Z" fill="#be8676"/>
  <path d="M29.54154,19.331a4.093,4.093,0,0,0-1.92334,2.26179,5.44581,5.44581,0,0,1-.75337,1.39483.27681.27681,0,0,1-.16627.14339.29191.29191,0,0,1-.17813-.05494,3.04633,3.04633,0,0,0-2.37419-.18243,15.45383,15.45383,0,0,0-2.50342,1.05407c-1.36316.67509-2.50341,1.71287-4.348,2.10815a4.50862,4.50862,0,0,0,1.71287.26351c-.26352,1.05407-1.4904,2.85136-4.21629,3.821-.28891.10277-.92322.27623-1.20772.39068-.07419.02985-.15682.06839-.1812.14457a.23.23,0,0,0,.03228.17465c.19815.36629,2.39006.365,2.806.34417,2.76972-.13865,4.14124-.41424,5.79739-1.31759a19.60039,19.60039,0,0,0,4.21628-3.16221,16.36421,16.36421,0,0,0,2.2399-3.55749A10.19234,10.19234,0,0,0,29.54154,19.331Z" fill="#694138"/>
  <path d="M29.66009,16.94345v1.17564c-.30191-1.17634-.51953-2.36051-.91128-3.50389a14.06392,14.06392,0,0,0-1.50982-3.187.94607.94607,0,0,1,.04111-1.2549c.06134-.05729.12255-.11554.201-.02293.01555.26282.20786.43894.32858.64695A13.16559,13.16559,0,0,1,29.66009,16.94345Z" fill="#be8676"/>
  <path d="M11.27266,9.75262a3.48747,3.48747,0,0,1,5.19258-.85916,3.39025,3.39025,0,0,1-.849,5.70883c-.13366.06224-.2703.11809-.40555.17691A3.42856,3.42856,0,0,1,10.8,12.23875,3.15619,3.15619,0,0,1,11.27266,9.75262Z" fill="#49231a"/>
  <path d="M19.2563,13.69618a3.38622,3.38622,0,0,1,2.697-2.57371,3.33941,3.33941,0,0,1,3.64405,1.7411,3.433,3.433,0,0,1-.60483,3.9652c-.06825.07071-.13881.1392-.2083.20872a3.229,3.229,0,0,1-3.4011.64513,3.27369,3.27369,0,0,1-2.21387-2.66986A3.75184,3.75184,0,0,1,19.2563,13.69618Z" fill="#49231a"/>
  <path d="M15.99605,15.37566a2.32718,2.32718,0,0,1,.92365-1.21234c.81158-.518,1.58585-.2427,2.056.71449.01433.04937.02224.07663.032.109a1.38294,1.38294,0,0,1,.06122.44049,2.23464,2.23464,0,0,1-.16785.81208c-.08829.20854-.18974.39208-.44582.38691-.29361-.00593-.18908.34259-.38755.41492a1.16845,1.16845,0,0,1-1.4256.2736,1.27631,1.27631,0,0,1-.73815-1.3169A2.68249,2.68249,0,0,1,15.99605,15.37566Z" fill="#49231a"/>
  <path d="M11.27266,9.75262a3.59437,3.59437,0,0,0-.13478,3.07819A3.38566,3.38566,0,0,0,14.87,14.81047c.11209-.01917.22709-.02124.34074-.03127a3.046,3.046,0,0,1-3.15585-.2896,3.31375,3.31375,0,0,1-1.0158-4.50354C11.09763,9.88652,11.1431,9.77888,11.27266,9.75262Z" fill="#c5a992"/>
  <path d="M19.2563,13.69618a5.918,5.918,0,0,0,.04066,1.471,3.38476,3.38476,0,0,0,5.06447,2.11394c.1394-.08372.28176-.16252.42275-.24361A2.72825,2.72825,0,0,1,22.6915,18.0384a3.33561,3.33561,0,0,1-3.54495-2.73751A3.93388,3.93388,0,0,1,19.2563,13.69618Z" fill="#c4a891"/>
  <path d="M18.04088,21.20292c-.6867-.00893-1.48343-1.00008-1.32846-1.57715.05021-.187.20215-.24749.31983-.07246a2.16194,2.16194,0,0,0,1.93065.96114c.08566.00012.16979.02575.18416.12311.01345.09116-.04969.149-.12543.19127A2.49955,2.49955,0,0,1,18.04088,21.20292Z" fill="#c6aa93"/>
  <path d="M13.92032,19.04143c-.72092.142-1.22426-.88974-1.266-1.4961a.20133.20133,0,0,1,.08754-.1558c.10406-.05671.19273.0058.24963.0923a1.88853,1.88853,0,0,0,1.81215.87312c.11531-.00644.24359.01581.27484.15452.033.14648-.10173.18383-.19255.2498A1.443,1.443,0,0,1,13.92032,19.04143Z" fill="#c6aa93"/>
  <path d="M15.25711,21.5946a1.4947,1.4947,0,0,1-1.3331-1.55409.25316.25316,0,0,1,.08429-.15808c.08759-.05086.1597.02382.20328.08716a2.20043,2.20043,0,0,0,1.94133.9389c.08031.00046.17648.001.19513.10329.01679.09211-.05992.14079-.12732.1885A2.82775,2.82775,0,0,1,15.25711,21.5946Z" fill="#c6aa93"/>
  <path d="M16.5747,24.098a1.4947,1.4947,0,0,1-1.3331-1.55409.25321.25321,0,0,1,.08429-.15809c.08759-.05085.1597.02383.20328.08717a2.20038,2.20038,0,0,0,1.94132.93889c.08032.00047.17649.001.19514.1033.01679.09211-.05992.14078-.12733.1885A2.82763,2.82763,0,0,1,16.5747,24.098Z" fill="#c6aa93"/>
  <path d="M12.75369,22.64867a1.4947,1.4947,0,0,1-1.3331-1.55409.25312.25312,0,0,1,.0843-.15808c.08759-.05086.15969.02382.20327.08716a2.20043,2.20043,0,0,0,1.94133.9389c.08032.00046.17649.001.19513.10329.01679.09211-.05992.14079-.12732.1885A2.82775,2.82775,0,0,1,12.75369,22.64867Z" fill="#c6aa93"/>
  <path d="M14.07128,25.02033a1.4947,1.4947,0,0,1-1.3331-1.55409.25316.25316,0,0,1,.08429-.15808c.08759-.05086.1597.02382.20328.08716a2.20043,2.20043,0,0,0,1.94133.9389c.08031.00046.17649.001.19513.10329.01679.09211-.05992.14079-.12732.1885A2.82775,2.82775,0,0,1,14.07128,25.02033Z" fill="#c6aa93"/>
  <path d="M14.13113,27.52377a1.269,1.269,0,0,1-1.13182-1.31945.21494.21494,0,0,1,.07156-.13422c.07437-.04318.13559.02023.17259.074a1.86817,1.86817,0,0,0,1.64822.79713c.06819.0004.14984.00085.16567.0877.01426.0782-.05087.11953-.1081.16A2.40089,2.40089,0,0,1,14.13113,27.52377Z" fill="#c6aa93"/>
  <path d="M11.62771,26.20618a1.269,1.269,0,0,1-1.13182-1.31945.21494.21494,0,0,1,.07156-.13422c.07437-.04318.13559.02023.17259.074a1.8682,1.8682,0,0,0,1.64822.79714c.06819.00039.14984.00084.16567.08769.01426.0782-.05087.11953-.1081.16A2.40081,2.40081,0,0,1,11.62771,26.20618Z" fill="#c6aa93"/>
  <path d="M12.052,28.18257a1.15514,1.15514,0,0,1-1.03025-1.201.19562.19562,0,0,1,.06515-.12217c.06769-.0393.12341.01841.15709.06736a1.70051,1.70051,0,0,0,1.5003.7256c.06207.00036.13639.00077.1508.07983.013.07118-.04631.1088-.0984.14567A2.18534,2.18534,0,0,1,12.052,28.18257Z" fill="#c6aa93"/>
  <path d="M15.99605,15.37566a2.80138,2.80138,0,0,1-.00717.33967,1.29911,1.29911,0,0,0,2.07873,1.32587,1.19857,1.19857,0,0,1-1.403.51622,1.2211,1.2211,0,0,1-.86214-1.23926A1.39021,1.39021,0,0,1,15.99605,15.37566Z" fill="#c4a892"/>
  <path d="M16.01226,12.79994a2.39648,2.39648,0,0,0-1.47248-3.16873.58287.58287,0,0,1,.3726-.70026,2.60336,2.60336,0,0,1,1.572,3.98736A.32253.32253,0,0,1,16.01226,12.79994Z" fill="#fde29d"/>
  <path d="M14.91238,8.931a2.79206,2.79206,0,0,0-.37271.70023,2.85218,2.85218,0,0,0-1.50459.03326,3.92669,3.92669,0,0,0-1.19894.78781A2.55371,2.55371,0,0,1,14.91238,8.931Z" fill="#fcc634"/>
  <path d="M15.31729,11.36606a.51206.51206,0,0,1-.51979.54256.52642.52642,0,1,1-.02505-1.05253A.516.516,0,0,1,15.31729,11.36606Z" fill="#f8f7f7"/>
  <path d="M16.01226,12.79994q.23613.059.47219.11822a2.37855,2.37855,0,0,1-1.67338,1.13948A3.03838,3.03838,0,0,0,16.01226,12.79994Z" fill="#f3bd33"/>
  <path d="M23.28687,11.88836a2.59283,2.59283,0,0,1,1.49072,3.99547.4004.4004,0,0,1-.58484-.21037,2.39853,2.39853,0,0,0-1.28643-3.07413C22.79966,12.23736,22.86919,11.96968,23.28687,11.88836Z" fill="#fde29d"/>
  <path d="M23.28687,11.88836a.9268.9268,0,0,0-.38041.711,2.61128,2.61128,0,0,0-2.36625.28259A2.42512,2.42512,0,0,1,23.28687,11.88836Z" fill="#fcc634"/>
  <path d="M23.6162,14.25585c-.01381.34309-.18462.5346-.51448.53815a.47061.47061,0,0,1-.52047-.51694.45734.45734,0,0,1,.48579-.49665A.47951.47951,0,0,1,23.6162,14.25585Z" fill="#fbfbfb"/>
  <path d="M24.19275,15.67346a1.46345,1.46345,0,0,0,.58494.21023,2.43527,2.43527,0,0,1-1.96987,1.12845A2.83373,2.83373,0,0,0,24.19275,15.67346Z" fill="#fac434"/>
  <path d="M18.08469,15.6598a4.25611,4.25611,0,0,1-.46881-.33374c-.14714-.13589-.39057-.30963-.27878-.50385.12723-.221.40724-.21269.6456-.08521C18.12266,15.03288,18.31576,15.3229,18.08469,15.6598Z" fill="#9e9394"/>
  <path d="M16.82539,15.5055c.173.28449.31558.50389.44094.73272.04807.08773.17365.20165.02579.29625a.26243.26243,0,0,1-.32055-.04714A.73419.73419,0,0,1,16.82539,15.5055Z" fill="#5b4d4b"/>
  <path d="M9.521,25.52877A8.75124,8.75124,0,0,0,10.62084,21.321a10.17116,10.17116,0,0,0-.53222-4.26158c-.1516-.38424-.33876-.75329-.52562-1.12168l-1.16307-2.293a.13563.13563,0,0,0-.051-.06374.12525.12525,0,0,0-.12368.02716,1.348,1.348,0,0,0-.39485,1.11225,6.46751,6.46751,0,0,0,.12561,1.808c.11224.436.30917.84516.44994,1.27279A8.60759,8.60759,0,0,1,8.74262,20.471a4.9968,4.9968,0,0,1-.75219,3.11358c-.58794.76209-.96079,1.81478-1.85617,2.16808-.43426.17135-.37563,1.35315.3563,1.62069C7.26319,27.65582,8.65835,26.95779,9.521,25.52877Z" fill="#c5a992"/>
  <path d="M18.08469,15.6598a3.17778,3.17778,0,0,0-.102-.92276.85363.85363,0,0,1,.34269.81323C18.3209,15.72049,18.24492,15.7992,18.08469,15.6598Z" fill="#d3cdcd"/>
  <path d="M2.66955,20.52193c-.39528-1.71286-.58515-3.93524,0-5.27035a3.82393,3.82393,0,0,1,.88623-1.07649,3.391,3.391,0,0,1,.93818-.49036c.47444-.18132,1.23824-.71075,2.78715.64454a6.85207,6.85207,0,0,1,1.97638,4.74332c0,4.348-1.39418,5.99794-2.36921,6.79431-.36227.29589-.994.602-1.44759.25158a8.49193,8.49193,0,0,1-1.19-1.512A13.84251,13.84251,0,0,1,2.66955,20.52193Z" fill="#694138"/>
  <path d="M5.56776,26.97841a.39539.39539,0,0,1-.05632-.78665c.11449-.01754,2.84744-.50412,3.21122-5.0929a9.16779,9.16779,0,0,0-2.877-7.51654.39554.39554,0,0,1,.49766-.61492,9.79837,9.79837,0,0,1,3.16783,8.19425c-.41641,5.248-3.744,5.79183-3.88523,5.81307A.41017.41017,0,0,1,5.56776,26.97841Z" fill="#49231a"/>
  <path d="M4.9091,15.59482a8.00117,8.00117,0,0,1,1.25542,4.94224A5.99227,5.99227,0,0,1,5.77145,22.801a2.6404,2.6404,0,0,1-1.61984,1.54245c-.38665.10857-1.29826-1.5875-1.3503-1.97687-.30309-2.26751-.89149-3.9109-.90215-6.20192C1.89019,14.2346,3.92339,14.257,4.9091,15.59482Z" fill="#82574b"/>
  <path d="M4.58024,25.2219A3.81743,3.81743,0,0,0,6.5318,23.31526a6.96837,6.96837,0,0,0,.77077-2.83607A9.876,9.876,0,0,0,5.7,14.72455a10.07435,10.07435,0,0,1,1.99761,5.7667,7.46072,7.46072,0,0,1-.63321,3.08456,4.46424,4.46424,0,0,1-2.221,2.39159Z" fill="#82574b"/>
  <path d="M24.40976,26.84636c-1.38484,1.20911-3.03045,1.71286-3.821.65879-.54558-.72744.49682-1.96878,1.97526-3.06379s2.665-1.39691,3.42685-.889C26.78142,24.07942,25.604,25.80366,24.40976,26.84636Z" fill="#be8676"/>
  <path d="M5.04148,26.54908a.3612.3612,0,0,1-.27514-.12649C-.05419,20.79972,2.17,13.75959,2.19312,13.68942a.36234.36234,0,1,1,.68877.22528c-.02123.06648-2.11527,6.729,2.43473,12.037a.36191.36191,0,0,1-.27514.59738Z" fill="#49231a"/>
  <path d="M23.88606,26.45559c-1.401,1.18734-2.939,1.58417-3.38077.98774s.39866-1.96762,1.8771-3.06263,2.84966-1.33373,3.47682-.90275C26.28339,23.76945,25.09421,25.43165,23.88606,26.45559Z" fill="#82574b"/>
  <path d="M29.67974,18.56323a15.87547,15.87547,0,0,1-1.6029,5.43735,12.57005,12.57005,0,0,1-8.60794,6.69894,19.02884,19.02884,0,0,1-2.75379.4216c-.92624.03881-1.85571.00254-2.78016.00739.92584-.03777,1.85288-.0346,2.77185-.10586A18.85582,18.85582,0,0,0,19.42,30.508a12.38916,12.38916,0,0,0,4.85-2.46837,13.64689,13.64689,0,0,0,4.62-9.51179Z" fill="#82574b"/>
  <path d="M18.21708,29.61329a2.78825,2.78825,0,0,0,2.9759-1.10864.2647.2647,0,1,1,.40856.33665.39116.39116,0,0,1-.0359.036,4.15082,4.15082,0,0,1-1.595.89542A2.39165,2.39165,0,0,1,18.21708,29.61329Z" fill="#be8676"/>
  <path d="M20.78638,26.78048a3.62067,3.62067,0,0,0,2.52279-2.0724.3313.3313,0,1,1,.61653.24274.44663.44663,0,0,1-.03324.06348A3.95194,3.95194,0,0,1,20.78638,26.78048Z" fill="#be8676"/>
  <path d="M5.7,20.91721a6.63443,6.63443,0,0,0-1.37571-4.11828.39712.39712,0,1,1,.599-.52157.48289.48289,0,0,1,.04426.06206A7.01659,7.01659,0,0,1,5.7,20.91721Z" fill="#be8676"/>
  <path d="M4.77771,21.70778a6.681,6.681,0,0,0-1.3221-4.15659.33056.33056,0,1,1,.50412-.42772.44129.44129,0,0,1,.03191.04478A6.99781,6.99781,0,0,1,4.77771,21.70778Z" fill="#be8676"/>
  <path d="M18.61237,28.55924a1.62476,1.62476,0,0,0,1.77515-.6382.15783.15783,0,1,1,.24421.2c-.0045.00554-.01685.01755-.02193.02231A1.77753,1.77753,0,0,1,18.61237,28.55924Z" fill="#be8676"/>
  <path d="M20.12761,8.99305a3.83387,3.83387,0,0,1,2.99465-.78417,4.54412,4.54412,0,0,1,1.50163.53866,3.955,3.955,0,0,1,1.16935,1.036,9.67713,9.67713,0,0,0-2.767-.92373A7.65572,7.65572,0,0,0,20.12761,8.99305Z" fill="#be8676"/>
  <path d="M14.34224,5.53207a3.8341,3.8341,0,0,1,3.06419.4403A4.54486,4.54486,0,0,1,18.581,7.05188a3.95516,3.95516,0,0,1,.67522,1.40883A9.67825,9.67825,0,0,0,17.06515,6.535,7.65582,7.65582,0,0,0,14.34224,5.53207Z" fill="#be8676"/>
  <path d="M25.90173,21.53726a3.36174,3.36174,0,0,0-1.70879-.07511,9.5774,9.5774,0,0,0-1.82386.51335A20.51083,20.51083,0,0,0,18.94175,23.75a20.67266,20.67266,0,0,1,3.29634-2.07675,9.98273,9.98273,0,0,1,1.85559-.69516,3.6718,3.6718,0,0,1,2.1181-.02216.32946.32946,0,0,1-.20988.62461l-.02989-.01165Z" fill="#c5a992"/>
  <path d="M9.76246,10.5067A3.09894,3.09894,0,0,0,9.60291,11.819a3.85493,3.85493,0,0,0,.37514,1.35148,5.90606,5.90606,0,0,0,1.98047,2.14695A6.09968,6.09968,0,0,1,9.636,13.36857,4.064,4.064,0,0,1,9.016,10.2463a.39724.39724,0,1,1,.75906.22774Z" fill="#c5a992"/>
</g>
</svg>
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="SaltSwap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="SaltSwap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
<<<<<<< HEAD
const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [7.5, 8, 10, 9];

const mediasAlunos = [alunos, medias];

function exibeNomeENota(aluno){
    if (mediasAlunos[0].includes(aluno)){
        //const alunos = mediasAlunos[0];
        //const medias = mediasAlunos[1];
        const [alunos, medias] = mediasAlunos;


        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`${aluno} está cadastrado e sua nota é ${media}`);

    }
    else {
        console.log(`${aluno} não encontrado!`);
    }
}

=======
const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [7.5, 8, 10, 9];

const mediasAlunos = [alunos, medias];

function exibeNomeENota(aluno){
    if (mediasAlunos[0].includes(aluno)){
        //const alunos = mediasAlunos[0];
        //const medias = mediasAlunos[1];
        const [alunos, medias] = mediasAlunos;


        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`${aluno} está cadastrado e sua nota é ${media}`);

    }
    else {
        console.log(`${aluno} não encontrado!`);
    }
}

>>>>>>> 126914b2db7dbf0ada47d52ba426b20310ea1654
exibeNomeENota('Ana');
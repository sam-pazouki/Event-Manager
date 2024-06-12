CREATE TABLE institution (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    tipo VARCHAR(255)
);

CREATE TABLE event (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    data_inicial TIMESTAMP,
    data_final TIMESTAMP,
    ativo BOOLEAN,
    institution_id BIGINT,
    FOREIGN KEY (institution_id) REFERENCES institution(id)
);

package com.roamio.api.user;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
class UserRepositoryTest {

    @Test
    void shouldFindByEmail() {}

    @Test
    void shouldReturnEmptyWhenEmailNotFound() {}

    @Test
    void shouldPersistUser() {}

    @Test
    void shouldEnforceUniqueEmail() {}
}
